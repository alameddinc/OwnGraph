const todoMutation = {
    createTodo: (parent, args, { db }) => {
        const isListExist = db.ldata.some(l => l.id == args.data.listId);
        if (!isListExist) {
            throw new Error('The List number does not avaible.');
        }
        const tempTodo = {
            /*
                id: String, +
                status: Boolean!, +

                title : String!,

                description: String,
                listId: String
             */
            id: Math.random().toString(36).substr(2,10),
            status: true,
            ...args.data
        };
        db.tdata.push(tempTodo);

        return tempTodo;
    }
};

module.exports = todoMutation;
