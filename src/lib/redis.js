import Redis from "ioredis";

const globalForRedis = globalThis;

const parseBoolean = (value, defaultValue = false) => {
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

const createRedisClient = () => {
  const {
    REDIS_URL,
    REDIS_HOST,
    REDIS_PORT,
    REDIS_PASSWORD,
    REDIS_USERNAME,
    REDIS_TLS,
  } = process.env;

  if (!REDIS_URL && !REDIS_HOST) {
    return null;
  }

  const connectionOptions = REDIS_URL
    ? {
        lazyConnect: true,
        maxRetriesPerRequest: 1,
        enableReadyCheck: false,
      }
    : {
        port: REDIS_PORT ? Number(REDIS_PORT) : 6379,
        host: REDIS_HOST || "127.0.0.1",
        password: REDIS_PASSWORD || undefined,
        username: REDIS_USERNAME || undefined,
        lazyConnect: true,
        maxRetriesPerRequest: 1,
        enableReadyCheck: false,
        tls: parseBoolean(REDIS_TLS) ? {} : undefined,
      };

  try {
    return REDIS_URL ? new Redis(REDIS_URL, connectionOptions) : new Redis(connectionOptions);
  } catch {
    return null;
  }
};

const resolveRedisClient = () => {
  if (!globalForRedis.__redisClient) {
    globalForRedis.__redisClient = createRedisClient();
  }
  return globalForRedis.__redisClient;
};

export const getRedisClient = () => resolveRedisClient();

export const isRedisAvailable = () => {
  const client = resolveRedisClient();
  return Boolean(client);
};

export const ensureRedisConnection = async () => {
  const client = resolveRedisClient();
  if (!client) {
    return null;
  }

  if (client.status === "ready" || client.status === "connecting") {
    return client;
  }

  try {
    await client.connect();
    return client;
  } catch {
    return null;
  }
};

export const closeRedisConnection = async () => {
  const client = resolveRedisClient();
  if (!client) {
    return;
  }

  try {
    await client.quit();
  } catch {
    await client.disconnect();
  } finally {
    globalForRedis.__redisClient = null;
  }
};
