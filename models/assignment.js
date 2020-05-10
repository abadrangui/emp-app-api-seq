'use strict';
module.exports = (sequelize, DataTypes) => {
  const assignment = sequelize.define('assignment', {
    name: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    planId: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER,
    createrId: DataTypes.INTEGER,
    assignmentRequirementId: DataTypes.INTEGER,
    completionPercetage: DataTypes.INTEGER,
    fileId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    messageId: DataTypes.INTEGER,
    act: DataTypes.STRING, 
    capital: DataTypes.STRING, 
    currentSituation: DataTypes.STRING, 
    requirement: DataTypes.STRING, 
    goal: DataTypes.STRING, 
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  assignment.associate = function(models) {
    // associations can be defined here
    assignment.belongsTo(models.employee, {as: 'employee', foreignKey: 'employeeId'});
    assignment.belongsTo(models.employee, {as: 'creater', foreignKey: 'createrId'})
  };
  return assignment;
};