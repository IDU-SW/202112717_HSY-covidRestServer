const express = require('express');
const app = express();
const frontRoute = require('./src/routes/frontRoute');
const bodyParser = require('body-parser');
const sequelizeSetting = require('./src/config/sequelize/relationMapping');
const PORT = require('./src/config/web').PORT;


sequelizeSetting();
app.use(express.json()); // json req를 받아올 수 있다. property 접근은 req.body
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', frontRoute);


 
app.listen(PORT, () => {
    console.log('>>>>>>>>>>>>>>server running port ', PORT);
});





