'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    // CEO id nemeh
    name: DataTypes.STRING,
    registrationNo: DataTypes.STRING,
    evaluationType: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  company.associate = function(models) {
    // associations can be defined here
  };
  return company;
};