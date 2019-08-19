module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Usuario",
      [
        {
          id: 1,
          nome: "Administrador",
          email: "admin@email.com",
          senha: "e6c02f1b9675ecfcf5f5ac45b993c7b7",
          tipoId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          nome: "Desenvolvedor 1",
          email: "dev1@email.com",
          senha: "363c153a0a8f77f97c266cded2351068",
          tipoId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 3,
          nome: "Desenvolvedor 2",
          email: "dev2@email.com",
          senha: "a062cf37be91df60217817b7b83f7efc",
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
