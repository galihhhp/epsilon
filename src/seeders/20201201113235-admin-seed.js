module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Admin', [{
        id: '1f370c71-5d91-435b-9c85-cdc844c87aa8',
        username: 'admin',
        password: 'admin'
      },
      {
        id: '299d609b-855c-4f0a-94cb-ac21e3e2116a',
        username: 'binar',
        password: 'binar'
      }
    ], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Admin', null, {});
  },
};