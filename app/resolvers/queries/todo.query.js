const responseData = {
    title:"Araba",
    description:"Test",
    status:true
};

module.exports = {
    Query: {
        todos: () => [
            responseData,
            responseData,
            responseData
        ],
        todo: (parent, args) => {
            return responseData
        },
    },
}
