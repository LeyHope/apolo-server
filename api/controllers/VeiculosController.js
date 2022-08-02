const database = require('../models/index')



class VeiculosController {

    static async criaVeiculo (req, res) {
        const {placa, chassi, marca, modelo, ano, ano_modelo,
        cor, km, id_responsavel} = req.body

        try {
            const veiculoCriado = await database.Veiculos.create({placa, chassi, marca, modelo, ano, ano_modelo,
                cor, km, id_responsavel})

                res.status(200).json(`Veiculo cadastrado com sucesso`)

        } catch (erro) {
            res.status(400).json({erro: erro.message})

        }
    }
}

module.exports = VeiculosController