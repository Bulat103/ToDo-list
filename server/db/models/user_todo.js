'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_todo extends Model {
    static associate(models) {
    }
  }
  User_todo.init({
    user_id: DataTypes.INTEGER,
    todo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_todo',
  });
  return User_todo;
};