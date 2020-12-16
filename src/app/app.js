const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Initialize
const app = express();

// Settings
const defaultPort = 4000;
app.set('port', process.env.PORT || defaultPort);

app
  .use(morgan('dev'))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

module.exports = app;
