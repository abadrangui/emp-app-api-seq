'use strict';
module.exports = (sequelize, DataTypes) => {
  const assignment = sequelize.define('assignment', {
    name: DataTypes.STRING,
    planId: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER,
    createrId: DataTypes.INTEGER,
    assignmentRequirementId: DataTypes.INTEGER,
    completionPercetage: DataTypes.INTEGER,
    fileId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    messageId: DataTypes.INTEGER
  }, {});
  assignment.associate = function(models) {
    // associations can be defined here
  };
  return assignment;
};