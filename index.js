require('dotenv').config();
const routeApi = require('./routes/routeApi');
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
//create express instance

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', routeApi);

app.listen(process.env.PORT, function(){
    console.log(`Server listen port ${process.env.PORT}`);
})