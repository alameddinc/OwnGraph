const listMutation = {
    createList: (parent, args, { db }) => {
        const tempList = {
            id: Math.random().toString(36).substr(2,10),
            ...args.data
        };
        db.ldata.push(tempList)
        return tempList;
    }
};

module.exports = listMutation;
