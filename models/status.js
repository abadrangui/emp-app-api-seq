'use strict';
module.exports = (sequelize, DataTypes) => {
  const status = sequelize.define('status', {
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  status.associate = function(models) {
    // associations can be defined here
  };
  return status;
};