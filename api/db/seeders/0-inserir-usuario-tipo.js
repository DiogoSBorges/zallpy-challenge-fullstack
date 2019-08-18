module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "UsuarioTipo",
      [
        {
          id: 1,
          nome: "Administrador",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          nome: "Desenvolvedor",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("UsuarioTipo", null, {});
  }
};
