'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    name: DataTypes.STRING,
    root: DataTypes.INTEGER,
    companyId: DataTypes.INTEGER,
    desc: DataTypes.STRING
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  department.associate = function(models) {
    // associations can be defined here
    department.belongsTo(models.company, {as: 'company', foreignKey: 'companyId'});
    department.belongsTo(models.department, {as: 'head', foreignKey: 'root'});
    department.hasMany(models.employee);
  };
  return department;
};
