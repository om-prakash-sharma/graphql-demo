'use strict';

const http = require('http');
const app = require('./app')

const PORT = 3000;

http.createServer(app).listen(PORT, () => {
    console.log('Server is listen on %s !!', PORT);
})