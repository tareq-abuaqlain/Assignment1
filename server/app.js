/* eslint-disable no-unused-vars */
require('dotenv').config();
const { join } = require('path');
const express = require('express');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const router = require('./router');

const app = express();

app.use([
  cookieParser(),
  compression(),
  express.json(),
  //   express.static(join(__dirname, '..', 'public')),
  express.urlencoded({ extended: true }),

]);

app.use('/api/v1', router);
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use((req, res, next) => res.status(404).json({ error: 'Not Found' }));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err.message);
});

app.set('port', process.env.PORT || 8080);

module.exports = app;
