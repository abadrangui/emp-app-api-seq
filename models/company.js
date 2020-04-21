'use strict';
module.exports = (sequelize, DataTypes) => {
  const company = sequelize.define('company', {
    name: DataTypes.STRING,
    CEOid: DataTypes.INTEGER,
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