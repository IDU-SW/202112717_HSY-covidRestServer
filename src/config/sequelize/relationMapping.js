const connection = require('./connection');
const StepByDistance = require('../../entity/StepByDistance');
const Area = require('../../entity/Area');
const Vaccine = require('../../entity/Vaccine');

const relation = async () => {
    Area.belongsTo(StepByDistance);
    StepByDistance.hasMany(Area, {
        foreignKey : 'stepCode'
    });
    await connection.sync();

  // const result = await Area.create({
  //   areaSqno : await Area.max('areaSqno')+1,
  //   stepCode : '3',
  //   name : 'sequlize'
  // })
  console.log('sequelize running');
};
module.exports = relation;