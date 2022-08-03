'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orcamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orcamentos.hasOne(models.Itens_Orcamentos, {
        foreignKey: 'id_orcamento'
      })
    }
  }
  Orcamentos.init({
    placa: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Orcamentos',
  });
  return Orcamentos;
};