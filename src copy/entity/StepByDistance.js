const {Model, DataTypes} = require('sequelize');
const connection = require('../config/sequelize/connection');

class StepByDistance extends Model {};

StepByDistance.init({
    stepCode : {
        type : DataTypes.STRING,
        primaryKey : true        
    },
    title : DataTypes.STRING,
    criterion : DataTypes.TEXT,
    compliance : DataTypes.STRING,
    useYn : DataTypes.STRING,
    delYn : DataTypes.STRING
}, {
    sequelize: connection
    , modelName : 'STEP_BY_DISTANCE'});
module.exports = StepByDistance;