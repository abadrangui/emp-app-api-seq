'use strict';
module.exports = (sequelize, DataTypes) => {
  const requirement = sequelize.define('requirement', {
    name: DataTypes.STRING,
    desc: DataTypes.STRING,
    type: DataTypes.STRING,
    evaluationTypeId: DataTypes.INTEGER
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  requirement.associate = function(models) {
    // associations can be defined here
  };
  return requirement;
};