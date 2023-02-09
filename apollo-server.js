'use strict';

const { ApolloServer } = require('@apollo/server');
const schema = require('./schema/schema')

const initGraphQL = async () => {
    const server = new ApolloServer({
        typeDefs: schema.typeDefs,
        resolvers: schema.resolvers
    });
    await server.start();
    return server;
}

module.exports = {
    initGraphQL
}