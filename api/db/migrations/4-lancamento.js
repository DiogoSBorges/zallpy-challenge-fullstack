module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Lancamento", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Usuario"
          },
          key: "id"
        },
        allowNull: false
      },
      projetoId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Projeto"
          },
          key: "id"
        },
        allowNull: false
      },
      horas: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Usuario");
  }
};
