const client = require('./redisClient');

async function storeInRedis(key, value) {
    try {
        await client.set(key, JSON.stringify(value));
    } catch (error) {
        console.error('Error storing data in Redis:', error);
        throw error;
    }
}

module.exports = storeInRedis;