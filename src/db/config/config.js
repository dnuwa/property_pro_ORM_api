require('dotenv').config();


module.exports = {

  // ensure you have a .env file with the specified viriables
  development: {
    database: process.env.DEV_DB_NAME,
    username: process.env.DEV_DB_USER,
    password: process.env.DEV_DB_PASS,
    host: process.env.DEV_DB_HOST,
    dialect: 'postgres'
  },

  test: {
    database: 'test_db',
    username: 'postgres',
    password: 1234567890,
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};
