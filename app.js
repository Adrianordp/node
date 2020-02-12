const {sum, subtract, multiply, divide} = require('./helpers');

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello world updated');
});

server.listen(3000);

const total = divide(5,4);

console.log('Total is '+total);
