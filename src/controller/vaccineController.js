const Vaccine = require('../entity/Vaccine');

const createOne = async (req, res) => {
    try{
        const rq = req.query;
        console.log(rq);
        if ( rq.manufacturer === undefined || rq.manufacturer ==""
          || rq.name === undefined || rq.name == "" 
          || rq.platform === undefined || rq.platform =="") throw new Error("필수 입력 중 입력되지 않은 입력이 있습니다.");
          const maxVaccineSqno = await Vaccine.max('vaccineSqno');
        await Vaccine.create ({
            vaccineSqno : (maxVaccineSqno + 1)
            ,manufacturer : rq.manufacturer
            ,name : rq.name
            ,platform : rq.platform
            ,targetAge : rq.targetAge
            ,composition : rq.composition
            ,numOfInoculation : rq.numOfInoculation
            ,inoculationMethod : rq.inoculationMethod
            ,storage : rq.storage
            ,distribution : rq.distribution
            ,storageMethod : rq.storageMethod
        });
        res.send("백신 insert 성공");
    } catch(e) {
        console.log(e);
        res.send("백신  insert 실패");
    }
};
const selectList = (req, res) => {
    Vaccine.findAll()
        .then(rtn => {
            console.log(rtn);
            if ( rtn !== undefined && rtn !== null) res.send(rtn);
            else res.send("백신을 찾지 못함");
        });
};
const selectOne = (req, res) => {
    const vaccineSqno = req.params.vaccineSqno;
    Vaccine.findOne({where : { vaccineSqno : vaccineSqno }})
        .then(rtn => {
            console.log(rtn);
            if ( rtn !== undefined && rtn !== null) res.send(rtn);
            else res.send("백신을 찾지 못함");
        });
};
const updateOne = async (req, res) => {
    try {
        const vaccineSqno = req.params.vaccineSqno;
        const rq = req.query;
        if ( rq.manufacturer === undefined || rq.manufacturer
            || rq.name === undefined || rq.name 
            || rq.platform === undefined || rq.platform) throw new Error("필수 입력 중 입력되지 않은 입력이 있습니다.");
            await Vaccine.update ({
                manufacturer : rq.manufacturer
                ,name : rq.name
                ,platform : rq.platform
                ,targetAge : rq.targetAge
                ,composition : rq.composition
                ,numOfInoculation : rq.numOfInoculation
                ,inoculationMethod : rq.inoculationMethod
                ,storage : rq.storage
                ,distribution : rq.distribution
                ,storageMethod : rq.storageMethod
            }, {
                where : {
                    vaccineSqno : vaccineSqno
                }
            });
    } catch(e){

    }
};
const patchUse = (req, res) => {
    try{
        const vaccineSqno = req.params.vaccineSqno;
        const useYn = req.query.useYn;    
        console.log(useYn);
        if(vaccineSqno === undefined || useYn === undefined) throw new Error("올바르지 못한 입력입니다.");
        if (useYn !== 'Y' && useYn !== 'N') throw new Error("사용여부는 Y 또는 N으로 입력되어야 합니다.");
        Vaccine.update({
            useYn : useYn
        }, {
            where : {
                vaccineSqno : vaccineSqno
            }
        })
        res.send("사용 여부 업데이트에 성공했습니다.");
    }catch ( e ){
        console.log(e);
        res.send("사용 여부 업데이트에 실패했습니다.");
    }
};
const deleteOne = (req, res) => {
    try{
        const vaccineSqno = req.params.vaccineSqno;
        if (vaccineSqno === undefined || vaccineSqno=="") throw new Error("삭제할 백신의 시퀀스가 입력되지 않았습니다.");
        Vaccine.destroy({where : {
            vaccineSqno : vaccineSqno
        }})
        res.send("삭제에 성공했습니다.");
    }catch (e){
        console.log(e);
        res.send("삭제에 실패했습니다.");
    }
    res.send("");
};
module.exports = {
    createOne,
    selectList,
    selectOne,
    updateOne,
    patchUse,
    deleteOne  
};