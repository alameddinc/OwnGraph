const listMutation = {
    createList: (parent, args, {models}) => {
        return models.listModel.createList(args.data)
    },
    deleteList: (parent, args, {models}) => {
        return models.listModel.removeList(args.id)
    },
    updateList: (parent, args, {models}) => {
        return models.listModel.listUpdate(args.selector, args.data)
    }
};

module.exports = listMutation;
