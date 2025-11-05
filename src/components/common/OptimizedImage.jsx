import Image from "next/image";

const toBoolean = (value, defaultValue = false) => {
  if (value === undefined || value === null) {
    return defaultValue;
  }

  if (typeof value === "boolean") {
    return value;
  }

  const normalized = String(value).trim().toLowerCase();
  if (["1", "true", "yes", "y", "on"].includes(normalized)) {
    return true;
  }

  if (["0", "false", "no", "n", "off"].includes(normalized)) {
    return false;
  }

  return defaultValue;
};

const rawAllowList = process.env.NEXT_PUBLIC_IMAGE_CACHE_ALLOW_HOSTS || "";
const allowedHosts = rawAllowList
  .split(",")
  .map((entry) => entry.trim())
  .filter(Boolean);

const isCacheEnabled = toBoolean(process.env.NEXT_PUBLIC_ENABLE_IMAGE_CACHE);
const cacheEndpoint = process.env.NEXT_PUBLIC_IMAGE_CACHE_ENDPOINT || "/api/cache-image";
const shouldCacheAllRemote = toBoolean(process.env.NEXT_PUBLIC_IMAGE_CACHE_STRICT_HOST_CHECK, true)
  ? allowedHosts.length === 0
  : true;

const matchesPattern = (hostname, pattern) => {
  if (!pattern) {
    return false;
  }

  if (pattern === "*") {
    return true;
  }

  if (pattern.startsWith("*.")) {
    const suffix = pattern.slice(1); // retain dot for endsWith
    return hostname === pattern.slice(2) || hostname.endsWith(suffix);
  }

  return hostname === pattern;
};

const isAllowedHost = (hostname) => {
  if (!allowedHosts.length) {
    return true;
  }

  return allowedHosts.some((pattern) => matchesPattern(hostname, pattern));
};

const shouldProxyThroughCache = (src) => {
  if (!isCacheEnabled || !src || typeof src !== "string") {
    return false;
  }

  if (!src.startsWith("http://") && !src.startsWith("https://")) {
    return false;
  }

  try {
    const { hostname } = new URL(src);
    if (!hostname) {
      return false;
    }
    return shouldCacheAllRemote || isAllowedHost(hostname);
  } catch {
    return false;
  }
};

const buildCacheUrl = (src) => {
  if (!cacheEndpoint) {
    return src;
  }

  const separator = cacheEndpoint.includes("?") ? "&" : "?";
  return `${cacheEndpoint}${separator}url=${encodeURIComponent(src)}`;
};

const normalizeStaticSrc = (src) => {
  if (!src || typeof src !== "string") {
    return src;
  }

  if (src.startsWith("data:") || src.startsWith("blob:")) {
    return src;
  }

  if (shouldProxyThroughCache(src)) {
    return buildCacheUrl(src);
  }

  if (src.startsWith("http://") || src.startsWith("https://")) {
    return src;
  }

  if (src.startsWith("/")) {
    return src;
  }

  const cleaned = src.replace(/^(\.\/)+/, "");
  return `/${cleaned.replace(/^\/+/, "")}`;
};

const parseDimension = (value) => {
  if (value === undefined || value === null || value === "") {
    return undefined;
  }

  if (typeof value === "number") {
    return value;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  sizes = "100vw",
  quality = 75,
  className,
  style,
  priority = false,
  fill = false,
  ...rest
}) => {
  const normalizedSrc = normalizeStaticSrc(src);
  const resolvedWidth = parseDimension(width);
  const resolvedHeight = parseDimension(height);

  if (fill) {
    return (
      <Image
        {...rest}
        src={normalizedSrc}
        alt={alt}
        fill
        sizes={sizes}
        quality={quality}
        className={className}
        priority={priority}
        style={style}
      />
    );
  }

  const shouldAutoSize = !resolvedWidth || !resolvedHeight;
  const mergedStyle = shouldAutoSize
    ? { width: "100%", height: "auto", ...style }
    : style;

  return (
    <Image
      {...rest}
      src={normalizedSrc}
      alt={alt}
      width={resolvedWidth ?? 0}
      height={resolvedHeight ?? 0}
      sizes={sizes}
      quality={quality}
      className={className}
      priority={priority}
      style={mergedStyle}
    />
  );
};

export default OptimizedImage;
