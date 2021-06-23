const covidApi = require('../../config/covidApiKey');
const fetch = require('node-fetch');
const convert = require('xml-js');


const restApi = ((req, res) => {
        fetch(covidApi.insfectionStatusBaseUrl
        + '&pageNo=' + req.query.pageNo
        + '&numOfRows=' + req.query.numOfRows
        + '&startCreateDt=' + req.query.startCreateDt
        + '&endCreateDt=' + req.query.endCreateDt)
            .then( res => res.text())
            .then( res => JSON.parse(convert.xml2json(res, {compact : true})))
            .then( response => {
                const rtnJson = response.response.body.items.item;
                //console.log(JSON.stringify(response.body.items.item));
                res.send(rtnJson);
            });
});
module.exports = restApi;
/**
 * stateDt : 기준일
 * stateTime : 기준 시간
 * decideCnt : 확진자 수
 * examCnt : 검사진행 수
 * careCnt : 치료중 환자 수
 * clearCnt : 격리해제 수
 * deathCnt : 사망자 수
 * resultNegCnt : 결과 음성 수
 * accExamCnt : 누적 검사 수
 * accExamCompCnt : 누적 검사 완료 수
 * createDt : 등록일시분초
 * updateDt : 수정일시분초
 */