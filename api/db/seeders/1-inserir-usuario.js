module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Usuario",
      [
        {
          id: 1,
          nome: "Administrador",
          email: "admin@email.com",
          senha: "admin",
          tipoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          nome: "Desenvolvedor 1",
          email: "dev1@email.com",
          senha: "dev1",
          tipoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          nome: "Desenvolvedor 2",
          email: "dev2@email.com",
          senha: "dev2",
          tipoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Usuario", null, {});
  }
};
