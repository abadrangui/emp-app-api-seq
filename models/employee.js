'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    registrationNo: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING,
    departmentId: DataTypes.INTEGER,
    role: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  employee.associate = function(models) {
    // associations can be defined here
  };
  return employee;
};