const db = require('./database/database');
const redis = require('./redis');

module.exports = {
    db: db,
    redis: redis,
}
