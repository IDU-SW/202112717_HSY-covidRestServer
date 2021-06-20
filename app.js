const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/config/sequelize/sequalize');
const PORT = require('./src/config/web').PORT;

const app = express();


sequelize();

app.use(express.json()); // json req를 받아올 수 있다. property 접근은 req.body
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    console.log(Area);
});



app.listen(PORT, () => {
    console.log('>>>>>>>>>>>>>>server running port ', PORT);
});

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





