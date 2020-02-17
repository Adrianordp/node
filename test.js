const Sequelize = require('sequelize');
const sequelize = new Sequelize('test','root','+95qwe0A',{
    host: 'localhost',
    dialect: 'mysql'
});

const Postagem = sequelize.define('postagem', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

// Postagem.create({
//     titulo: "Random Title",
//     conteudo: "jwwdipaniucn3 waidnaijndijawnf awfinawdn"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({fore: true});

Usuario.create({
     nome: 'Adriano',
     sobrenome: 'Rodrigues',
     idade: 28,
     email: 'adrianordp1@hotmail.com'
})