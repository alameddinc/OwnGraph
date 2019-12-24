const query = require('./queries');
const mutation = require('./mutations');

module.exports = {
    ...query,
    ...mutation
}
