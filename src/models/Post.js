const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');

const Post = sequelize.define(
  'post',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    image: DataTypes.STRING,
    category: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

module.exports = Post;
