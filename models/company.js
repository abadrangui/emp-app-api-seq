'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    name: DataTypes.STRING,
    registrationNo: DataTypes.STRING,
    evaluationType: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {});
  company.associate = function(models) {
    // associations can be defined here
  };
  return company;
};