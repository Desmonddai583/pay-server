const Redis = require('ioredis')
const bluebird = require('bluebird')
const config = require('../conf/default.js')

const redis_client = new Redis({
    port: config.redis.port,          
    host: config.redis.host,   
    // password: "123", // 如果设置密码了请打开此项
    family: 4,
    db: 0
});
redis_client.on('connect', function () {
    console.info('Reids connect success')
});
redis_client.on('end', function () {
    console.error('Redis connect error')
});

const redis_cli = {

    async set (db, key, value, expired) {
        await redis_client.select(db)
        // await redis_client.set(key, value,'EX',expired)
        await redis_client.set(key, value)
        return redis_client.expire(key, expired)
    },

    async get (db, key) {
        await redis_client.select(db)
        return await redis_client.get(key)
    },

    async del(db, key) {
        await redis_client.select(db)
        return await redis_client.del(key)
    },

    async push(key, value, expired) {
        await redis_client.select(4)
        await redis_client.lpush(key, value);
        return await redis_client.expire(key, expired);
    },
    async getList(key) {
        await redis_client.select(4)
        return await redis_client.lrange(key, 0, 100);
    },
    async remove(key,value){
        await redis_client.select(4)
        await redis_client.lrem(key,0,value)
    }

}

module.exports = redis_cli