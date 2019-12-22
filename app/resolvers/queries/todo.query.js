module.exports = {
    Query: {
        todos: () => {},
        todo: (parent, args) => 'Hi ' + args.data,
    },
}
