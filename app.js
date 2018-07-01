'use strict'

const express = require('express');
const bodyParser =  require('body-parser');

const app =  express();

const routesUser = require('./routes/userRoutes');
const routesGroup = require('./routes/groupRoutes');
const routesAuth = require('./routes/authRoutes');
const routesControl = require('./routes/controlRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api',routesUser);
app.use('/api',routesGroup);
app.use('/auth',routesAuth);
app.use('/api',routesControl);

module.exports=app;