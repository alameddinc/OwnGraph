const db = require('./database/');
const redis = require('./redis');
const logs = require('./logs');

module.exports = {
    db: db,
    redis: redis,
    logs: logs
}
