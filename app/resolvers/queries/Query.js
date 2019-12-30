const responseData = {
    title:"Araba",
    description:"Test",
    status:true,
    listId: 1
};


const Query = {
    hello: () => 'Hello world!',
    todo: (parent, args, {db}) => db.tdata.find(t => t.id == args.id),
    todos: (parent, args, {db}) => db.tdata,
    list: (parent, args, {db}) => db.ldata.find(l => l.id == args.id),
    lists: (parent, args, {db}) => db.ldata,
};

module.exports = Query;
