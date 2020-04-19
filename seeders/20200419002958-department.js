'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('departments', [
      {
        name:'ЦОЁН ХХК',
        root:'0',
        companyId: 1,
        desc: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'Мangaa Tech',
        root:'0',
        companyId: 2,
        desc: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name:'MGA LLC',
        root:'0',
        companyId: 3,
        desc: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('departments', null, {});
  }
};
