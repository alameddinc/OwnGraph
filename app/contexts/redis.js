const redis = require('redis');
const redisConfig = require('../config/redis');
const client = redis.createClient();

client.on("error", (err) => console.log("Error " + err));
