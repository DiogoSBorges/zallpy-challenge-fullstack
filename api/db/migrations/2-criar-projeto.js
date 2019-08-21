module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable("Projeto", {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false
        },      
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false        
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false        
        },
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable("Projeto");
    }
  };
  