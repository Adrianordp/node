<<<<<<< HEAD
// comments
=======
>>>>>>> 967d226362dd94f8f3422c7ef3cd632866c13da8
const express = require('express');
const app = express();
var http = require('http');

app.get('/', function(req,res) {
<<<<<<< HEAD
    res.sendFile(__dirname+'/html/index.html');
});

app.get('/about', function(req,res) {
    res.sendFile(__dirname+'/html/about.html');
=======
    res.send('Wellcome to my web server!');
});

app.get('/about', function(req,res) {
    res.send('My about page.');
>>>>>>> 967d226362dd94f8f3422c7ef3cd632866c13da8
});

app.get('/blog', function(req,res) {
    res.send('My blog page.');
});

app.get('/ola/:job/:name/:age', function(req,res) {
    pageHTML = '<h1>Ola '+req.params.name+'</h1>'+'<h2>You are a great '+req.params.job+'!</h2>'+'<h3>Are you just '+req.params.age+' years old?!</h3>';
    res.send(pageHTML);
});

app.listen(8081,function() {
    console.log('Server running at url localhost:'+8081);
<<<<<<< HEAD
});
=======
});
>>>>>>> 967d226362dd94f8f3422c7ef3cd632866c13da8
