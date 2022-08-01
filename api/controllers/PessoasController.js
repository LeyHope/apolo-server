const database = require('../models/index')

class PessoasControllers {

    static async criarPessoa (req, res) {
        const {cpf_cnpj, nome, tipo_pessoa, cep, estado, rua, numero, bairro, telefone, 
            telefone_2, info_adicionais} = req.body


            const pessoa = {
                cpf_cnpj,
                nome,
                tipo_pessoa,
                cep, estado,
                rua,
                numero,
                bairro,
                telefone,
                telefone_2,
                info_adicionais
            }


            console.log(pessoa)

        try {
            await database.Pessoas.create(pessoa)

            return res.status(200).json(`Pessoa cadastrado com sucesso`)
        } catch (erro) {
            return res.status(500).json({erro: erro.message})

        }


    }



}

module.exports = PessoasControllers