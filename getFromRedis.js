const client = require('./redisClient');

async function getFromRedis(key){
    try{
        const value = await client.get(key);
        return JSON.parse(value);
    } catch (error) {
        console.error('Error getting data from Redis:', error);
        throw error;
    }
}

module.exports = getFromRedis;