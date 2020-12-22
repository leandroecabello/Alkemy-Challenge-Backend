const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const boom = require('@hapi/boom');
const errorHandler = require('./middlewares/errorHandler');
const verifyBoom = require('./middlewares/verifyBoom');
const { DEFAULT_PORT, MORGAN_DEV } = require('./config/config');
const postRoutes = require('./routes/post.routes');

const app = express();

const defaultPort = DEFAULT_PORT;
app.set('port', process.env.PORT || defaultPort);

app
  .use(morgan(MORGAN_DEV))
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }));

app
  .use('/posts', postRoutes)
  .use('*', (req, res, next) => next(boom.notFound()));

app.use(verifyBoom);
app.use(errorHandler);

module.exports = app;
