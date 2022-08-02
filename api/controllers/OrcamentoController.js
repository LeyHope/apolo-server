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


    static async criaTabela (req, res) {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'zporto1889',
            database: 'apolo'
        });
        
        // simple query
        const bdCriadto = connection.query(
            'CREATE TABLE teste_louco3(id int, nome varchar(20))',
            function(err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            }
        );
    }

}

module.exports = OrcamentoController