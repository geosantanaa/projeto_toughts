const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('tought', 'root', 'QTU123v!', {
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('Conexão estabelecida com sucesso!')
}catch(err){
    console.log(`Não foi possivél concluir a conexão, ${err}`)
}

module.exports = sequelize