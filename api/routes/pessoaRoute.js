const { Router } = require('express')
const PessoaController = require('../controllers/PessoasController')

const router = Router()

router.post('/pessoa', PessoaController.criarPessoa)


module.exports = router