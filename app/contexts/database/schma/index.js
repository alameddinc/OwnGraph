const {todo} = require('./todo.mongo');
const {list} = require('./list.mongo');

module.exports = {
    todoSchema:todo,
    listSchema:list,
}
