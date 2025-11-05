import crypto from "crypto";
import { NextResponse } from "next/server";
import { ensureRedisConnection, isRedisAvailable } from "@/lib/redis";
import { getBufferValue, setBufferValue, setCacheValue, getCacheValue } from "@/lib/cache";

export const runtime = "nodejs";

const resolveTTL = () => {
  const ttl = Number(process.env.REDIS_IMAGE_TTL_SECONDS);
  return Number.isFinite(ttl) && ttl > 0 ? Math.floor(ttl) : 86400;
};

const resolveMaxBytes = () => {
  const limit = Number(process.env.REDIS_IMAGE_MAX_BYTES);
  const fallback = 5 * 1024 * 1024;
  return Number.isFinite(limit) && limit > 0 ? Math.floor(limit) : fallback;
};

const buildCacheKey = (imageUrl) => {
  const prefix = process.env.REDIS_IMAGE_CACHE_PREFIX || "image-cache";
  const digest = crypto.createHash("sha256").update(imageUrl).digest("hex");
  return `${prefix}:${digest}`;
};

const buildMetaKey = (cacheKey) => `${cacheKey}:meta`;

const shouldBypassCache = () => {
  const flag = process.env.REDIS_IMAGE_CACHE_BYPASS;
  if (!flag) {
    return false;
  }

  return ["1", "true", "yes", "debug"].includes(flag.toLowerCase());
};

const proxyFetch = async (imageUrl) => {
  const controller = new AbortController();
  const timeout = Number(process.env.REDIS_IMAGE_FETCH_TIMEOUT_MS) || 10000;
  const timer = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(imageUrl, {
      method: "GET",
      signal: controller.signal,
      headers: {
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
        "User-Agent":
          process.env.REDIS_IMAGE_USER_AGENT ||
          "ppsi-digjaya-cache/1.0 (+https://ppsi-digjaya.org)",
      },
    });

    if (!response.ok) {
      return { error: true, status: response.status, message: "Image fetch failed" };
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const contentType = response.headers.get("content-type") || "application/octet-stream";
    const lastModified = response.headers.get("last-modified") || "";
    const etag = response.headers.get("etag") || "";
    const cacheControl = response.headers.get("cache-control") || "";

    return {
      error: false,
      buffer,
      contentType,
      lastModified,
      etag,
      cacheControl,
    };
  } catch (error) {
    const status = error.name === "AbortError" ? 504 : 502;
    return { error: true, status, message: error.message || "Image fetch aborted" };
  } finally {
    clearTimeout(timer);
  }
};

const isMethodAllowed = (method) => ["GET", "HEAD"].includes(method);

const buildResponse = (buffer, status, headers, includeBody) =>
  new NextResponse(includeBody ? buffer : null, { status, headers });

const handleRequest = async (request, includeBody = true) => {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return NextResponse.json({ error: "Missing required url parameter" }, { status: 400 });
  }

  let parsedUrl;
  try {
    parsedUrl = new URL(imageUrl);
  } catch {
    return NextResponse.json({ error: "Invalid image url" }, { status: 400 });
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    return NextResponse.json({ error: "Only HTTP and HTTPS protocols are supported" }, { status: 400 });
  }

  if (!isMethodAllowed(request.method)) {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
  }

  const cacheKey = buildCacheKey(imageUrl);
  const metaKey = buildMetaKey(cacheKey);
  const ttl = resolveTTL();
  const maxBytes = resolveMaxBytes();
  const useCache = isRedisAvailable() && !shouldBypassCache();

  if (useCache) {
    await ensureRedisConnection();
    const [cachedBuffer, cachedMeta] = await Promise.all([
      getBufferValue(cacheKey),
      getCacheValue(metaKey),
    ]);

    if (cachedBuffer && cachedBuffer.length > 0) {
      const meta = cachedMeta
        ? (() => {
            try {
              return JSON.parse(cachedMeta);
            } catch {
              return {};
            }
          })()
        : {};

      return buildResponse(
        cachedBuffer,
        200,
        {
          "Content-Type": meta.contentType || "application/octet-stream",
          "Cache-Control": meta.cacheControl || `public, max-age=${ttl}`,
          "X-Cache": "HIT",
          ...(meta.etag ? { ETag: meta.etag } : {}),
          ...(meta.lastModified ? { "Last-Modified": meta.lastModified } : {}),
        },
        includeBody,
      );
    }
  }

  const result = await proxyFetch(imageUrl);
  if (result.error || !result.buffer) {
    return NextResponse.json(
      { error: result.message || "Unable to fetch image" },
      { status: result.status || 502 },
    );
  }

  if (result.buffer.length > maxBytes) {
    return buildResponse(
      result.buffer,
      200,
      {
        "Content-Type": result.contentType,
        "Cache-Control": "no-store",
        "X-Cache": "BYPASS",
      },
      includeBody,
    );
  }

  if (useCache) {
    await Promise.all([
      setBufferValue(cacheKey, result.buffer, ttl),
      setCacheValue(
        metaKey,
        JSON.stringify({
          contentType: result.contentType,
          etag: result.etag,
          lastModified: result.lastModified,
          cacheControl: result.cacheControl,
        }),
        ttl,
      ),
    ]);
  }

  return buildResponse(
    result.buffer,
    200,
    {
      "Content-Type": result.contentType,
      "Cache-Control": result.cacheControl || `public, max-age=${ttl}`,
      "X-Cache": useCache ? "MISS" : "SKIP",
      ...(result.etag ? { ETag: result.etag } : {}),
      ...(result.lastModified ? { "Last-Modified": result.lastModified } : {}),
    },
    includeBody,
  );
};

export async function GET(request) {
  return handleRequest(request, true);
}

export async function HEAD(request) {
  return handleRequest(request, false);
}
