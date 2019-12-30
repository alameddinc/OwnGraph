const List = {
    todos: (parent, args, {db}) => {
        return db.tdata.filter(t => t.listId == parent.id)
    }
};

module.exports = List;
