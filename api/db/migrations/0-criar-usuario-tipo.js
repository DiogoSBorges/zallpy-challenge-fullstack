module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("UsuarioTipo", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable("UsuarioTipo");
  }
};
