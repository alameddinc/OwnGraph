
const todoMutation = {
    createTodo: (parent, args, { db, logs }) => {
        const isListExist = db.ldata.some(l => l.id == args.data.listId);
        if (!isListExist) {
            logs.error_logs("CreateTodo Failed: The List number does not avaible.");
            throw new Error('CreateTodo Failed: The List number does not avaible.');
        }
        const tempTodo = {
            id: Math.random().toString(36).substr(2,10),
            status: true,
            ...args.data
        };
        db.tdata.push(tempTodo);

        return tempTodo;
    }
};

module.exports = todoMutation;
