const Todo = {
    list: (parent, args, {db}) => {
        return db.ldata.find(l => l.id == parent.listId)
    }
};

module.exports = Todo
