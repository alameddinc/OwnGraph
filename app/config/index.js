const database = require('./database');
const redis = require('./redis');
const log = require('./log/index');


module.exports = {
    database: database,
    redis: redis,
    log: log
}
