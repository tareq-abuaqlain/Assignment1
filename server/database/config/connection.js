const { Pool } = require('pg');
require('dotenv').config();

const {
  NODE_ENV, DB_URL,
} = process.env;

let connectionString = '';
const ssl = false;

switch (NODE_ENV) {
  case 'development':
    connectionString = DB_URL;
    break;

  default:
    throw new Error('NODE_ENV is not set to development');
}
const connection = new Pool({
  connectionString,
  ssl,
});

module.exports = connection;
