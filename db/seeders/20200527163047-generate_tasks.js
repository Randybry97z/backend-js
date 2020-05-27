'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('tasks', [{
        id: 3,
        description: 'New JOB',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('tasks', null, {});
  }
};
