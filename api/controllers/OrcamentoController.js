const database = require('../models/index')


// class OrcamentoController {

//     static async criaOrcamento (req, res) {
//         //criaTabelaOrcamento
//             //id_responsavel
//             //id_veiculo
//             //id_item
//             //id_item
//             //id_item
//             //id_item


//         //criaTabelaItensOrcamento
//             // operacoes,
//             // quantidade,
//             // tipo,
//             // titulo,
//             // fornecimento,
//             // preco,
//             // desconto,
//             // preco_liquido
//     }



//     static async criaItemOrcamento (req, res) {
//         const {operacoes, quantidade, tipo, titulo, fornecimento, preco, desconto, preco_liquido} = req.body
        
//         const novoItem = {
//             operacoes,
//             quantidade,
//             tipo,
//             titulo,
//             fornecimento,
//             preco,
//             desconto,
//             preco_liquido
//         }


//     }
// }


const mysql = require('mysql2');

class OrcamentoController {


    // static async criaTabela (req, res) {

    //     const nomeTabela = "tabela_1"


    //     try {
    //         const connection = mysql.createConnection({
    //             host: 'localhost',
    //             user: 'root',
    //             password: 'zporto1889',
    //             database: 'apolo'
    //         });
            
    
    //         const bdCriado = connection.query(
    //             `CREATE TABLE ${nomeTabela}(id int, nome varchar(20))`,
    //             function(err, results, fields) {
    //             console.log(results); // results contains rows returned by server
    //             console.log(fields); // fields contains extra meta data about results, if available
    //             }
    //         );
            
    //         res.status(201).json(bdCriado)

    //     } catch (erro) {
    //         res.status(400).json()

    //     }

    // }

    static async criaOrcamento (req, res) {

        const {placa} = req.body

        const orcamento = {
            placa
        }

        try {
            const orcamentoCriado = await database.Orcamentos.create(orcamento)

            res.status(201).json(orcamentoCriado)

        } catch (erro) {
            res.status(400).json()

        }

    }

    static async criaItem (req, res) {
        const {operacao, quantidade, tipo, titulo, fornecimento, preco,
        desconto, preco_liquido, id_orcamento} = req.body

        const item = {



        }

        try {
            await database.Itens_orcamento.create(item)

        } catch (erro) {

        }


    }

}

module.exports = OrcamentoController