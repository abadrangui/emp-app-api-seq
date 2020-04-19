'use strict';
module.exports = (sequelize, DataTypes) => {
  const plan = sequelize.define('plan', {
    name: DataTypes.STRING,
    fileId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    active: DataTypes.BOOLEAN
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  plan.associate = function(models) {
    // associations can be defined here
  };
  return plan;
};