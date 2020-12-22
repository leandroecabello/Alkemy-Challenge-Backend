const Sequelize = require('sequelize');
const { DDBB } = require('./config/config');

const { USER, PASS, HOST, PORT, NAME } = DDBB;

const dbQueryString = `mysql://${USER}:${PASS}@${HOST}:${PORT}/${NAME}`;
const sequelize = new Sequelize(dbQueryString);

const db = {};

db.dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully');
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
};

db.dbSyncTables = async () => {
  await sequelize.sync({ force: false });
  console.log('Synchronized tables');
};

module.exports = { db, sequelize };
