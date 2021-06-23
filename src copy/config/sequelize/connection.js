const { Sequelize } = require('sequelize');
const config = require('../mysqlConn');
const connection = new Sequelize (config.database, config.user, config.password, {
    //.env로 refactoring!!
    host: config.host
    , dialect: 'mysql'
    , define : {
        freezeTableName: true,
        timestamps: true
    }
    , pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
});
console.log('connection loading');

module.exports = connection;