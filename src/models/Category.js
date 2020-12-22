const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Category = sequelize.define('category', {
  id: {
    type: DataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true,
  },
  category: {
    type: DataTypes.STRING(45),
  },
});

module.exports = Category;
