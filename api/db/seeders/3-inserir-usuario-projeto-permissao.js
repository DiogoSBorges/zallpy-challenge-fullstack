module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "UsuarioProjetoPermissao",
        [
          {
            id: 1,
            usuarioId: 2,
            projetoId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: 2,
            usuarioId: 3,
            projetoId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: 3,
            usuarioId: 3,
            projetoId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      );
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("UsuarioProjetoPermissao", null, {});
    }
  };
  