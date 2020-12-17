const { DataTypes } = require('sequelize');
const { sequelize } = require('../../database');

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
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Post;

/* module.exports = (sequelize, type) => {
  sequelize.define('post', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: type.STRING,
      allowNull: false,
    },
    content: {
      type: type.STRING,
      allowNull: false,
    },
    image: {
      type: type.STRING,
    },
    category: {
      type: type.STRING,
      allowNull: false,
    },
  });
}; */
