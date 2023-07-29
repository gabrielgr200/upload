const Sequelize = require('sequelize');
const sequelize = new Sequelize('imagens', 'admin', 'Skyfall20#?', {
    host: 'bancomysql.c1rmsxzyhbjb.us-east-2.rds.amazonaws.com',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso"); 
}).catch(function(){
    console.log("Erro: não foi possivel fazer a conexão");
});

module.exports = sequelize;