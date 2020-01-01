const database = require('./database');
const redisConf = require('./redis');
const log = require('./log/index');
const path = require('./path');


module.exports = {
    database: database,
    redisConf: redisConf,
    log: log,
    path: path
}
