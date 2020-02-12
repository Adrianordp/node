const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hey whas up from express update');
});

console.log('Listening to 192.168.100.156:3000');

app.listen(3000);
