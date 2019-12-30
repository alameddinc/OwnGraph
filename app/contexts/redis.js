const redis = require('redis');
const {redisConf} = require('../config');
const client = redis.createClient();

client.on("error", (err) => console.log("Error " + err));
