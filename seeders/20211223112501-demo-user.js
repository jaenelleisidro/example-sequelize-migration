'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'rey',
      lastName: 'santos',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Users', null, {});
  }
};
