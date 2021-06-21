const connection = require('../config/sequelize/connection');
const Area = require('../entity/Area');

const selectAll = (req, res) => {
    Area.findAll()
        .then(rtn => {
            console.log(rtn);
            res.send(rtn);
        });
}

const selectOne = (req, res) => {
    const _areaSqno = req.params.areaSqno
    Area.findOne({
        where : {
            areaSqno : _areaSqno
        }
    })
        .then(rtn => {
            console.log(rtn);
            res.send(rtn);
        });
}

module.exports = {
    selectAll,
    selectOne
}