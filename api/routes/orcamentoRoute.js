const { Router } = require('express')

const OrcamentoController = require('../controllers/OrcamentoController')

const router = Router()


router.post('/criatabela', OrcamentoController.criaTabela)


module.exports = router