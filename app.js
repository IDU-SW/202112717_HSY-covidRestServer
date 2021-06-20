const app = require('express')();
const bodyParser = require('body-parser');
const PORT = require('./src/config/web');

app.use(bodyParser.urlencoded({ extended: false }));


/**
 * DB CRUD
 * 
 * GET : /dstc-step-rules
 * POST : /dstc-step-rules
 * 
 * GET : /vaccines
 * GET : /vaccines/{sqno}
 * POST : /vaccines
 * PUT : /vaccines/{sqno}
 * PATCH : /vaccines/{sqno}/use
 * DELETE : /vaccines/{sqno}/
 * 
 * GET : /areas
 * GET : /areas/{sqno}
 * POST : /areas
 * PUT : /areas/{sqno}
 * PATCH : /areas/{sqno}/use
 * DELETE : /areas/{sqno}
 * 
 * GET : /step-rules
 * 
 * GET : /areas
 * GET : /areas/{sqno}
 * POST : /areas
 * PUT : /areas/{sqno}
 * PATCH : /areas/{sqno}/use
 * DELETE : /areas/{sqno}
 * 
 */


/**
 * API
 * '/tot-inft-stat'? : Total Infection Status
 * 
 * '/dstc-steps' : Overall Regional Distancing Phase
 * 
 * '/dstc-steps/{sqno}' : Select Area Distancing phase
 *
 * 
 */





app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/aa', (req, res) => {
    res.sendStatus(404);
});




app.listen(PORT, () => {
    console.log('>>>>>>>>>>>>>>server running port ', PORT);
});