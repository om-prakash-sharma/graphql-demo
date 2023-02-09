'use strict';

const express = require('express');
const { expressMiddleware } = require('@apollo/server/express4');
const { initGraphQL } = require('./apollo-server');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

initGraphQL().then(gql => {
    app.use(expressMiddleware(gql));
})

module.exports = app;