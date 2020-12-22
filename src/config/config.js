const config = {
  DDBB: {
    NAME: process.env.DDBB_NAME,
    USER: process.env.DDBB_USER,
    PASS: process.env.DDBB_PASS,
    PORT: process.env.DDBB_PORT,
    HOST: process.env.DDBB_HOST,
  },

  DEFAULT_PORT: 4000,
  MORGAN_DEV: 'dev',

  HTTP_CODE: {
    CREATE: 201,
    OK: 200,
  },
};

module.exports = config;
