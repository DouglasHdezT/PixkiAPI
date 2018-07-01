'use strict'

const express = require('express');
const bodyParser =  require('body-parser');

const app =  express();

const apiUser = require('./routes/userRoutes');
const apiGroup = require('./routes/groupRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api',apiUser);
app.use('/api',apiGroup);

module.exports=app;