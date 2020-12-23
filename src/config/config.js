const config = {
  DEFAULT_PORT: 4000,
  MORGAN_DEV: 'dev',

  DDBB: {
    NAME: process.env.DDBB_NAME,
    USER: process.env.DDBB_USER,
    PASS: process.env.DDBB_PASS,
    PORT: process.env.DDBB_PORT,
    HOST: process.env.DDBB_HOST,
    DIALECT: process.env.DDBB_DIALECT,
  },

  DB_TEST: {
    NAME: 'alkemy-blog',
    USER: 'root',
    PASS: '',
    PORT: '3306',
    HOST: '127.0.0.1',
    DIALECT: 'mysql',
  },

  HTTP_CODE: {
    CREATE: 201,
    OK: 200,
  },
};

module.exports = config;
