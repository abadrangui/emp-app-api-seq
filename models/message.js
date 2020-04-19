'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    text: DataTypes.STRING,
    assignmentId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  });
  message.associate = function(models) {
    // associations can be defined here
  };
  return message;
};