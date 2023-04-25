require('dotenv').config();

module.exports = {
  development: {
    username: process.env.USER_DB_HOST,
    password: process.env.USER_DB_PORT,
    database: process.env.USER_DB_USERNAME,
    host: process.env.USER_DB_PASSWORD,
    port: process.env.USER_DB_DATABASE,
    dialect: 'postgres',
    dialectOptions: {
      charset: 'utf8',
    },
    define: {
      timestamps: true,
      underscored: true,
      version: true,
    },
  },
};
