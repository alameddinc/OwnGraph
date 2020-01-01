const db = require('./database/');
const redis = require('./redis');
const logs = require('./logs');
const models = require('./models');

module.exports = {
    db: db,
    redis: redis,
    logs: logs,
    models: models
}
