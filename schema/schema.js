'use strict';

const { readFileSync } = require('fs');

const typeDefs = readFileSync(require.resolve('./schema.graphql'), 'utf-8')

const fakeData = [
    { name: "Book 1", pages: 432, id: 1 },
    { name: "Book 2", pages: 32, id: 2 },
    { name: "Book 3", pages: 532, id: 3 }
]

const resolvers = {
    Query: {
        books: (parent, args) => {
            return fakeData;
        },
        book: (parent, args) => {
            return fakeData.find((item) => { return item.id == args.id });
        }
    }
}

module.exports = {
    typeDefs,
    resolvers
}