const { Sequelize, DataTypes, Model } = require('sequelize');
const db = require('../config/db');

const userModel = db.define('users', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    Sequelize,
    modelName: 'User'
});


module.exports = userModel;