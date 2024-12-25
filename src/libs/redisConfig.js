import IORedis from "ioredis";

const redisConnection = new IORedis({
    maxRetriesPerRequest: null,
});

export {
    redisConnection
};