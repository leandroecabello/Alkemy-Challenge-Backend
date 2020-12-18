const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = require('./app');
const { db } = require('./database');

(async function main() {
  try {
    await db.dbConnection();
    await db.dbSyncTables();

    app.listen(app.get('port'), () => {
      console.log(`Server on Port: ${app.get('port')}`);
    });
  } catch (err) {
    console.log(err);
  }
})();
