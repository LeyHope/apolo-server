const database = require('../models/index')


class OrcamentoController {


    static async criaItemOrcamento (req, res) {
        const {operacoes, quantidade, tipo, titulo, fornecimento, preco, desconto, preco_liquido} = req.body
        
        const novoItem = {
            operacoes,
            quantidade,
            tipo,
            titulo,
            fornecimento,
            preco,
            desconto,
            preco_liquido
        }


    }
}