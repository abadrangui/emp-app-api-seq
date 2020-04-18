'use strict';
module.exports = (sequelize, DataTypes) => {
  const message = sequelize.define('message', {
    text: DataTypes.STRING,
    assignmentId: DataTypes.INTEGER,
    ownerId: DataTypes.INTEGER
  }, {});
  message.associate = function(models) {
    // associations can be defined here
  };
  return message;
};