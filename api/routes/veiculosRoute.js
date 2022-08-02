const { Router } = require('express')

const VeiculosController = require('../controllers/VeiculosController')


const router = Router()

router.post('/veiculo', VeiculosController.criaVeiculo)

module.exports = router