'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Veiculos.belongsTo(models.Pessoas, {
        foreignKey: 'id_responsavel'
      }) 
    }
  }
  Veiculos.init({
    placa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    chassi: {
      type: DataTypes.STRING,
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ano: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ano_modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    km: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Veiculos',
  });
  return Veiculos;
};