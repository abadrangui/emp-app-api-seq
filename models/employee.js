'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('employee', {
    username: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    registrationNo: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
    email: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER,
    role: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  employee.associate = function(models) {
    // associations can be defined here
    employee.belongsTo(models.department, { as: 'department', foreignKey: 'departmentId'});
    employee.hasMany(models.assignment, { as: 'employee', foreignKey: 'employeeId'});
  };
  return employee;
};