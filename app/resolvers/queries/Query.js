const responseData = {
    title:"Araba",
    description:"Test",
    status:true,
    listId: 1
};


const Query = {
    hello: () => 'Hello world!',
    todos: (parent, args, {db}) => db.tdata,
    todo: (parent, args, {db}) => db.tdata.find(t => t.id == args.id),
};

module.exports = Query;
