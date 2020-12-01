module.exports = {
  up: async(queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('UserHistory', [{
        id: '7bea761d-dec9-4150-aa75-ffeeaf4605b2',
        playerChoice: 'ROCK',
        opponentChoice: 'ROCK',
        result: 'DRAW',
        userId: 'c4cb353b-0f1e-455b-b634-562a6d39bc90',
      },
      {
        id: '33fabd06-e259-4fef-a717-a2e7f3e1d27a',
        playerChoice: 'PAPER',
        opponentChoice: 'ROCK',
        result: 'WIN',
        userId: '17d8679f-b7ad-429b-9a87-d8a5925c4e32',
      },
    ], {});
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('UserHistory', null, {});
  },
};