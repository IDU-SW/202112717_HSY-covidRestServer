const {Model, DataTypes} = require('sequelize');
const connection = require('../config/sequelize/connection');

class Area extends Model {};
Area.init({
    areaSqno : {
        type : DataTypes.INTEGER,
        primaryKey : true        
    },
    stepCode : {
        type : DataTypes.INTEGER,
        foreignKey : true        
    },
    name : DataTypes.STRING,
    useYn : DataTypes.STRING,
    delYn : DataTypes.STRING
}, { 
    sequelize: connection
    , modelName: 'AREA' });
module.exports = Area;