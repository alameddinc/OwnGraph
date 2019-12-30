const database = require('./database');
const redisConf = require('./redis');
const log = require('./log/index');


module.exports = {
    database: database,
    redisConf: redisConf,
    log: log
}
