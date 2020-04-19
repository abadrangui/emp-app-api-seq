'use strict';
module.exports = (sequelize, DataTypes) => {
  const assignment = sequelize.define('assignment', {
    // start end date nemeh
    name: DataTypes.STRING,
    planId: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER,
    createrId: DataTypes.INTEGER,
    assignmentRequirementId: DataTypes.INTEGER,
    completionPercetage: DataTypes.INTEGER,
    fileId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    messageId: DataTypes.INTEGER
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  assignment.associate = function(models) {
    // associations can be defined here
  };
  return assignment;
};