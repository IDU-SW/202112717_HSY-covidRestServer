const Area = require('../entity/Area');

const selectList = (req, res) => {
    Area.findAll()
        .then(rtn => {
            console.log(rtn);
            if ( rtn !== undefined && rtn !== null) res.send(rtn);
            else res.send("Area 찾지 못함");
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
            if ( rtn !== undefined && rtn !== null) res.send(rtn.dataValues);
            else res.send("Area 찾지 못함");
            
        });
}

const createOne = async (req, res) => {
    try{
        if ( req.query.name === undefined || req.query.name === "" ) throw new Error("지역 이름이 입력되지 않았습니다.");
        if ( req.query.stepCode === undefined || req.query.stepCode === "") throw new Error("거리두기 단계가 입력되지 않았습니다.");
        const ExistArea = await Area.findOne({where : {name : req.query.name}});
        if (ExistArea !== undefined || ExistArea) throw new Error("지역 이름이 중복됩니다.");
        maxSqno = await Area.max('areaSqno');
        await Area.create ({ areaSqno : maxSqno + 1,
                          name : req.query.name,
                          stepCode : req.query.stepCode});
        res.send("Area insert 성공");
    } catch(e) {
        console.log(e);
        res.send("Area insert 실패");
    }    
}

const updateOne = async (req, res) => {
    try{
        if ( req.query.name === undefined || req.query.name === "" ) throw new Error("지역 이름이 입력되지 않았습니다.");
        if ( req.query.stepCode === undefined || req.query.stepCode === "") throw new Error("거리두기 단계가 입력되지 않았습니다.");
        const ExistArea = await Area.findOne({where : {name : req.query.name}});
        if ( ExistArea !== null && ExistArea.dataValues.areaSqno !== Number(req.params.areaSqno) ) throw new Error("지역 이름이 중복됩니다.");
        await Area.update ({ areaSqno : req.query.areaSqno,
                          name : req.query.name,
                          stepCode : req.query.stepCode}, { where : {
                              areaSqno : Number(req.params.areaSqno)
                          }});
        res.send("Area update 성공");
    }catch (e) {
        console.log(e);
        res.send("Area update 실패");
    }
}

const patchUse = async (req, res) => {
    try{
        if ( req.params.areaSqno === undefined || req.params.areaSqno === "") throw new Error("(URL문제)시퀀스가 입력되지 않았습니다.");
        if ( req.query.useYn === undefined || req.query.useYn === "") throw new Error("사용 여부가 입력되지 않았습니다.");
        const resultArea = await Area.findOne({where : {areaSqno : req.params.areaSqno}});
        if (req.query.useYn !== 'Y' && req.query.useYn !== 'N') throw new Error("사용 여부는 Y 또는 N 이어야 합니다.");    
        await Area.update({useYn : req.query.useYn}, {where : {areaSqno : req.params.areaSqno}});
        res.send("Area 사용 여부 update 성공");

    } catch(e){
        console.log(e);
        res.send("Area 사용 여부 update 실패");
    }
}

const deleteOne = async ( req, res ) => {
    try {
        if ( req.params.areaSqno === undefined || req.params.areaSqno === "") throw new Error("시퀀스가 입력되지 않았습니다.");
        await Area.destroy({
            where : { areaSqno : req.params.areaSqno}
        });
        res.send("Area 삭제 성공");
    } catch(e){
        console.log(e);
        res.send("Area 실패 성공");
    }
}

module.exports = {
    selectList,
    selectOne,
    createOne,
    updateOne,
    patchUse,
    deleteOne
}

