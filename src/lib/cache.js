import crypto from "crypto";
import { ensureRedisConnection, isRedisAvailable } from "./redis";

const defaultTTL = () => {
  const ttl = Number(process.env.REDIS_DEFAULT_TTL_SECONDS);
  return Number.isFinite(ttl) && ttl > 0 ? Math.floor(ttl) : 300;
};

export const buildCacheKey = (...parts) => {
  if (!parts.length) {
    return null;
  }

  return parts
    .filter(Boolean)
    .map((fragment) => String(fragment).trim())
    .filter(Boolean)
    .join(":");
};

export const getCacheValue = async (key) => {
  if (!key || !isRedisAvailable()) {
    return null;
  }

  const client = await ensureRedisConnection();
  if (!client) {
    return null;
  }

  try {
    return await client.get(key);
  } catch {
    return null;
  }
};

export const setCacheValue = async (key, value, ttlSeconds = defaultTTL()) => {
  if (!key || value === undefined || value === null || !isRedisAvailable()) {
    return false;
  }

  const client = await ensureRedisConnection();
  if (!client) {
    return false;
  }

  const ttl = Number.isFinite(ttlSeconds) && ttlSeconds > 0 ? Math.floor(ttlSeconds) : defaultTTL();

  try {
    await client.set(key, value, "EX", ttl);
    return true;
  } catch {
    return false;
  }
};

export const getCacheJSON = async (key) => {
  const rawValue = await getCacheValue(key);
  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue);
  } catch {
    return null;
  }
};

export const setCacheJSON = async (key, payload, ttlSeconds = defaultTTL()) => {
  if (!key || payload === undefined || payload === null) {
    return false;
  }

  try {
    const serialized = JSON.stringify(payload);
    return await setCacheValue(key, serialized, ttlSeconds);
  } catch {
    return false;
  }
};

export const withCache = async (key, factory, ttlSeconds) => {
  if (typeof factory !== "function") {
    throw new TypeError("withCache requires a fetcher function as the second argument");
  }

  if (isRedisAvailable()) {
    const cachedValue = await getCacheJSON(key);
    if (cachedValue !== null) {
      return cachedValue;
    }
  }

  const freshValue = await factory();
  await setCacheJSON(key, freshValue, ttlSeconds);
  return freshValue;
};

export const hashKey = (input, prefix = "cache") => {
  if (!input) {
    return null;
  }

  const raw = typeof input === "string" ? input : JSON.stringify(input);
  const digest = crypto.createHash("sha256").update(raw).digest("hex");
  return `${prefix}:${digest}`;
};

export const getBufferValue = async (key) => {
  if (!key || !isRedisAvailable()) {
    return null;
  }

  const client = await ensureRedisConnection();
  if (!client) {
    return null;
  }

  try {
    return await client.getBuffer(key);
  } catch {
    return null;
  }
};

export const setBufferValue = async (key, buffer, ttlSeconds = defaultTTL()) => {
  if (!key || !buffer || !isRedisAvailable()) {
    return false;
  }

  const client = await ensureRedisConnection();
  if (!client) {
    return false;
  }

  const ttl = Number.isFinite(ttlSeconds) && ttlSeconds > 0 ? Math.floor(ttlSeconds) : defaultTTL();

  try {
    await client.set(key, buffer, "EX", ttl);
    return true;
  } catch {
    return false;
  }
};
