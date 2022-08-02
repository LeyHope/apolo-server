const database = require('../models/index')


class OrcamentoController {

    static async criaOrcamento (req, res) {
        //criaTabelaOrcamento
            //id_responsavel
            //id_veiculo
            //id_item
            //id_item
            //id_item
            //id_item


        //criaTabelaItensOrcamento
            // operacoes,
            // quantidade,
            // tipo,
            // titulo,
            // fornecimento,
            // preco,
            // desconto,
            // preco_liquido
    }



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