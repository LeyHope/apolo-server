const bodyParser = require('body-parser')
const pessoa = require('./pessoaRoute')
const veiculos = require('./veiculosRoute')


module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoa)
    app.use(veiculos)
}