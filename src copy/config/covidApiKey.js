// 공공데이터활용지원센터_보건복지부 코로나19 감염 현황
/**
 * parameter
 * &pageNo=1
 * &numOfRows=10
 * &startCreateDt=20200410
 * &endCreateDt=20200410
 *  
 */ 
const apiKey = {
    encoding : '2oZgjmX5voitj34%2FUianpw77PCv41zm5IQ8NDXUsDERsTAve9wzr1IDCQm7aJ2wtPMp5XH1Dy1b%2F3Rr0VQH0rw%3D%3D',
    decoding : '2oZgjmX5voitj34/Uianpw77PCv41zm5IQ8NDXUsDERsTAve9wzr1IDCQm7aJ2wtPMp5XH1Dy1b/3Rr0VQH0rw=='
}; 
const insfectionStatusBaseUrl = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=' + apiKey.encoding;

const regionalStatusBaseUrl = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=' + apiKey.encoding;
module.exports = {
    apiKey,
    insfectionStatusBaseUrl,
    regionalStatusBaseUrl
}