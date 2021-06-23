const SBD = require('../entity/StepByDistance');

const createOne = async (req, res) => {
    try{
        if ( req.query.stepCode === undefined || req.query.stepCode === "") throw new Error("거리두기 단계가 입력되지 않았습니다.");
        if ( req.query.title === undefined || req.query.title === "" ) throw new Error("거리 두기 제목이 입력되지 않았습니다.");
        if ( req.query.criterion === undefined || req.query.criterion === "" ) throw new Error("거리두기의 단계가 입력되지 않았습니다.");
        if ( req.query.compliance === undefined || req.query.compliance === "" ) throw new Error("준수해야 할 사항이 입력되지 않았습니다.");
        
        const ExistSBD = await SBD.findOne({where : { stepCode : req.query.stepCode, title : req.query.title}});
        if (ExistSBD !== undefined || ExistSBD) throw new Error("거리두기 단계 제목이 겹칩니다.");
        await SBD.create ({ stepCode : req.query.stepCode
                          , title : req.query.title     
                          , criterion : req.query.criterion
                          , compliance : req.query.compliance});
        res.send("거리두기단계 설명 insert 성공");
    } catch(e) {
        console.log(e);
        res.send("거리두기단계 설명 insert 실패");
    }
};
const selectList = (req, res) => {
    SBD.findAll()
        .then(rtn => {
            console.log(rtn);
            if ( rtn !== undefined && rtn !== null) res.send(rtn);
            else res.send("거리두기 단계 찾지 못함");
        });
};
const selectOne = (req, res) => {
    const stepCode = req.params.stepCode;
    SBD.findOne({
        where : {
            stepCode : stepCode
        }
    })
        .then(rtn => {
            console.log(rtn);
            if ( rtn !== undefined && rtn !== null) res.send(rtn.dataValues);
            else res.send("SBD 찾지 못함");
            
        });
};
const updateOne = async (req, res) => {
    try{
    if ( req.params.stepCode === undefined || req.params.stepCode === "") throw new Error("거리두기 단계가 입력되지 않았습니다.");
        if ( req.query.title === undefined || req.query.title === "" ) throw new Error("거리 두기 제목이 입력되지 않았습니다.");
        if ( req.query.criterion === undefined || req.query.criterion === "" ) throw new Error("거리두기 단계 조건이 입력되지 않았습니다.");
        if ( req.query.compliance === undefined || req.query.compliance === "" ) throw new Error("준수해야 할 사항이 입력되지 않았습니다.");
        const ExistSBD = await SBD.findOne({where : {stepCode : req.params.stepCode, title : req.query.title}});
        if ( ExistSBD !== null && ExistSBD.dataValues.stepCode !== req.params.stepCode ) throw new Error("지역 이름이 중복됩니다.");
        await SBD.update ({ title : req.query.title
                          , criterion : req.query.criterion
                          , compliance : req.query.compliance 
                        },  { where : {
                              stepCode : req.params.stepCode
                          }});
        res.send("SBD update 성공");
    }catch (e) {
        console.log(e);
        res.send("SBD update 실패");
    }
    
};
const patchUse = async (req, res) => {
    try{
        if ( req.params.stepCode === undefined || req.params.stepCode === "") throw new Error("(URL문제)단계 코드가 입력되지 않았습니다.");
        if ( req.query.useYn === undefined || req.query.useYn === "") throw new Error("사용 여부가 입력되지 않았습니다.");
        const resultSBD = await SBD.findOne({where : {stepCode : req.params.stepCode}});
        if (req.query.useYn !== 'Y' && req.query.useYn !== 'N') throw new Error("사용 여부는 Y 또는 N 이어야 합니다.");    
        await SBD.update({useYn : req.query.useYn}, {where : {stepCode : req.params.stepCode}});
        res.send("SBD 사용 여부 update 성공");
    } catch(e){
        console.log(e);
        res.send("SBD 사용 여부 update 실패");
    }
};
const deleteOne = async (req, res) => {
    try {
        if ( req.params.stepCode === undefined || req.params.stepCode === "") throw new Error("(URL문제)단계 코드가 입력되지 않았습니다.");
        await SBD.destroy({
            where : { stepCode : req.params.stepCode}
        });
        res.send("SBD 삭제 성공");
    } catch(e){
        console.log(e);
        res.send("SBD 삭제 실패");
    }
};



module.exports = {
    createOne,
    selectList,
    selectOne,
    updateOne,
    patchUse,
    deleteOne  
};