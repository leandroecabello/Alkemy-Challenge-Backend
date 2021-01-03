const Sequelize = require('sequelize');
const { DDBB, DB_TEST } = require('./config/config');

const { USER, PASS, HOST, PORT, NAME, DIALECT } = DDBB || DB_TEST;

const dbQueryString = `${DIALECT}://${USER}:${PASS}@${HOST}:${PORT}/${NAME}`;
const sequelize = new Sequelize(dbQueryString);

const db = {
  dbConnection: async () => {
    try {
      await sequelize.authenticate();
      console.log('Database connection has been established successfully');
    } catch (err) {
      console.error('Unable to connect to the database:', err);
    }
  },

  dbSyncTables: async () => {
    await sequelize.sync({ force: false });
    console.log('Synchronized tables');
  },
};

module.exports = { db, sequelize };
