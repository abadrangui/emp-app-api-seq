'use strict';
module.exports = (sequelize, DataTypes) => {
  const plan = sequelize.define('plan', {
    name: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER,
    fileId: DataTypes.INTEGER,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    active: DataTypes.INTEGER
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  plan.associate = function(models) {
    // associations can be defined here
  };
  return plan;
};