const { Sequelize, DataTypes } = require('sequelize');
const db = require('../config/db');

const textsModel = db.define('texts', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    Sequelize,
    modelName: 'blogTexts'
});


module.exports = textsModel;

