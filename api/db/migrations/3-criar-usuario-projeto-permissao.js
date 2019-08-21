module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.createTable(
        "UsuarioProjetoPermissao",
        {
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
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false
          },
          updatedAt: {
            type: Sequelize.DATE,
            allowNull: false
          }
        },
        { transaction }
      );

      await queryInterface.addConstraint(
        "UsuarioProjetoPermissao",
        ["usuarioId", "projetoId"],
        {
          type: "unique",
          name: "UK_USUARIO_PROJETO_PERMISSAO"
        },
        { transaction }
      );
      await transaction.commit();
    } catch (err) {
      await transaction.rollback();
      throw err;
    }
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Usuario");
  }
};
