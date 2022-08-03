'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Itens_Orcamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      operacao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      quantidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fornecimento: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco: {
        type: Sequelize.STRING,
        allowNull: false
      },
      desconto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      preco_liquido: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_orcamento: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Orcamentos', key: 'id' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Itens_Orcamentos');
  }
};