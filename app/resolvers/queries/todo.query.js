module.exports = {
    Query: {
        todos: () => {},
        todo: (parent, args) => 'Hello world! ' + args.data,
    },
}
