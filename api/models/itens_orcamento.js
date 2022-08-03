'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens_Orcamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Itens_Orcamento.belongsTo(models.Orcamentos, {
        foreignKey: 'id_orcamento'
      })
    }
  }
  Itens_Orcamento.init({
    operacao: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    tipo: DataTypes.STRING,
    titulo: DataTypes.STRING,
    fornecimento: DataTypes.STRING,
    preco: DataTypes.STRING,
    desconto: DataTypes.STRING,
    preco_liquido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Itens_Orcamento',
  });
  return Itens_Orcamento;
};