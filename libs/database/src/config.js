const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    host: process.env.USER_DB_HOST,
    port: process.env.USER_DB_PORT,
    username: process.env.USER_DB_USERNAME,
    password: process.env.USER_DB_PASSWORD,
    database: process.env.USER_DB_DATABASE,
    dialect: 'postgres',
  },
};
