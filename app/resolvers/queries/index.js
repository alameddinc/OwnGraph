const hello = require('./hello.query')
const todo = require('./todo.query')

module.exports = {
    ...hello,
    ...todo
}
