module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "Projeto",
        [
          {
            id: 1,
            nome: "Projeto A",
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            id: 2,
            nome: "Projeto B",
            createdAt: new Date(),
            updatedAt: new Date()
          }
        ],
        {}
      );
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete("Projeto", null, {});
    }
  };
  