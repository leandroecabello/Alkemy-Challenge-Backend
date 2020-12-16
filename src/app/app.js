const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const postRoutes = require('./routes/post.routes');

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

app.use('/api/v1/posts', postRoutes);

module.exports = app;
