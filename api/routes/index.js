const bodyParser = require('body-parser')
const pessoa = require('./pessoaRoute')


module.exports = app => {
    app.use(bodyParser.json())
    app.get('/', (req, res)=> res.send('salve'))
    app.use(pessoa)
}