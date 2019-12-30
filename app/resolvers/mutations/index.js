const list = require('./list.mutation');
const todo = require('./todo.mutation');

const Mutation = {
    ...list,
    ...todo
};

module.exports = Mutation;
