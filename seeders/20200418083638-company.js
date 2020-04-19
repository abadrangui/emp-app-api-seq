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
      return queryInterface.bulkInsert('Companies',[
        {
          name: 'ЦОЁН ХХК',
          registrationNo: '5540526',
          evaluationType: '1',
          type: 'LLC',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Мangaa Tech',
          registrationNo: '254254',
          evaluationType: '2',
          type: 'LLC',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'MGA LLC',
          registrationNo: '254777',
          evaluationType: '3',
          type: 'LLC',
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
    return queryInterface.bulkDelete('Companies', null, {});
  }
};
