const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const {importSchema} = require('graphql-import');
const typedefs = importSchema('./app/schemas/schema.graphql');
const resolvers = require('./app/resolvers');

const server = new ApolloServer({
    typeDefs: typedefs,
    resolvers: resolvers
});

const app = express();
server.applyMiddleware({app});

app.listen({port: 3000}, () =>{
    console.log(`🚀 OwnGraph V 1.0 ready at http://localhost:3000${server.graphqlPath}`)
    }
);
