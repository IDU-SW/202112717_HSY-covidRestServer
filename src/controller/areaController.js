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
    const areaSqno = req.params.areaSqno
    Area.findOne({
        where : {
            areaSqno : areaSqno
        }
    })
        .then(rtn => {
            console.log(rtn);
            res.send(rtn);
        });
}

const createOne = async (req, res) => {
    try{
        if ( req.query.name === undefined || req.query.name === "" ) throw new Error("지역 이름이 입력되지 않았습니다.");
        if ( req.query.stepCode === undefined || req.query.stepCode === "") throw new Error("거리두기 단계가 입력되지 않았습니다.");
        maxSqno = await Area.max('areaSqno');
        Area.createOne ({ areaSqno : maxSqno,
                          name : req.query.name,
                          stepCode : req.query.stepCode});
    } catch(e) {
        console.log(e);
    }
    console.log(req.query);
    
    
    
}

module.exports = {
    selectAll,
    selectOne,
    createOne
}