module.exports = (sequelize, type) => {
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
};
