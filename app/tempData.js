const todos = [
    {
        id: '1',
        title: 'The Godfather',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        status:true,
        listId:1
    },
    {
        id: '2',
        title: 'Scarface',
        description: 'In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.',
        status:true,
        listId:1
    },
    {
        id: '3',
        title: 'Pulp Fiction',
        description: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        status:true,
        listId:1
    }
];

const list = [
    {
        id: '1',
        title:'Deneme 1',
        description:'Deneme Type 1'
    },
    {
        id: '2',
        title:'Deneme 2',
        description:'Deneme Type 2'
    },
    {
        id: '3',
        title:'Deneme 3',
        description:'Deneme Type 3'
    },
];

module.exports = {
    tdata: todos,
    ldata: list
};
