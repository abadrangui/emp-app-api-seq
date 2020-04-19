'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    name: DataTypes.STRING,
    root: DataTypes.STRING,
    companyId: DataTypes.INTEGER,
    desc: DataTypes.STRING
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};
