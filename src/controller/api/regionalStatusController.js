const covidApi = require('../../config/covidApiKey');
const fetch = require('node-fetch');
const convert = require('xml-js');


const restApi = ((req, res) => {
        fetch(covidApi.regionalStatusBaseUrl
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