const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const Category = require('./Category');

const Post = sequelize.define('post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: DataTypes.STRING,
});

Category.hasMany(Post, {
  as: 'categoryId',
  foreingKey: 'categoryId',
});

module.exports = Post;
