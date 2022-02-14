const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('mariadb::memory:');

class blogVideos extends Model {}

blogVideos.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    desc: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    file: {
        // type: photos ? vidéos ?,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'blogVideos'
});


module.exports = blogVideos;