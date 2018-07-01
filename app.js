'use strict'

const express = require('express');
const bodyParser =  require('body-parser');

const app =  express();

const routesUser = require('./routes/userRoutes');
const routesGroup = require('./routes/groupRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api',routesUser);
app.use('/api',routesGroup);

module.exports=app;