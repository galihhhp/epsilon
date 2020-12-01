module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.createTable('UserHistory', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      playerChoice: {
        type: Sequelize.STRING,
        allowNull: false
      },
      opponentChoice: {
        type: Sequelize.STRING,
        allowNull: false
      },
      result: {
        type: Sequelize.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.UUID,
        allowNull: true,
        unique: true,
        onDelete: 'cascade',
        references: {
          model: 'User',
          key: 'id',
        },
      }
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('UserHistory');
  }
};