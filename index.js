const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

// Config
    // Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');
    
    // Connetion with databank
    const sequelize = new Sequelize('test','root','+95qwe0A',{
        host:'localhost',
        dialect: 'mysql'
    })

    //Route
    app.get('/cad', function(req,res) {
        res.render('formulario')
    })

    //Route
    app.post('/add', function(req,res) {
        res.send('formulario recebido')
    })

app.listen(8081,function() {
    console.log('Server running at url localhost:'+8081);
});
