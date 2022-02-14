const { Sequelize } = require('sequelize');

const name = process.env.DB_NAME || 'groupomania';
const user = process.env.DB_USER || 'root';
const password = process.env.DB_PASSWORD || 'root12/';
const host = process.env.DB_HOST || 'localhost';
const dbport = process.env.DB_PORT || '8080';
const dialect = process.env.DB_DIALECT || 'mariadb';

module.exports = new Sequelize(name, user, password, {
    host: host,
    port: dbport,
    dialect: dialect,
});