const {Model, DataTypes} = require('sequelize');
const connection = require('../config/sequelize/connection');


class Vaccine extends Model {};
Vaccine.init({
    vaccineSqno : {
        type : DataTypes.INTEGER,
        primaryKey : true        
    },
    manufacturer : DataTypes.STRING,
    name : DataTypes.STRING,
    platform : DataTypes.STRING,
    targetAge : DataTypes.STRING,
    composition : DataTypes.STRING,
    numOfInoculation : DataTypes.STRING,
    inoculationMethod : DataTypes.STRING,
    sotrage : DataTypes.STRING,
    distribution : DataTypes.STRING,
    storageMethod : DataTypes.STRING,
    useYn : DataTypes.STRING,
    delYn : DataTypes.STRING
}, {
    sequelize: connection
    , modelName : 'VACCINE'});

    module.exports = Vaccine;