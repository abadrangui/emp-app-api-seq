'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('assignments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      planId: {
        type: Sequelize.INTEGER
      },
      employeeId: {
        type: Sequelize.INTEGER
      },
      createrId: {
        type: Sequelize.INTEGER
      },
      assignmentRequirementId: {
        type: Sequelize.INTEGER
      },
      completionPercetage: {
        type: Sequelize.INTEGER
      },
      fileId: {
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.INTEGER
      },
      messageId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('assignments');
  }
};