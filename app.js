'use strict'

const express = require('express');
const bodyParser =  require('body-parser');

const app =  express();

const routesUser = require('./routes/userRoutes');
const routesGroup = require('./routes/groupRoutes');
const routesAuth = require('./routes/authRoutes');
const routesControl = require('./routes/controlRoutes');
const routesTask = require('./routes/taskRoutes');
const routesSymptom = require('./routes/symptomRoutes');
const routesLocation = require('./routes/locationRoutes');
const routesBanner = require('./routes/bannerRoutes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api',routesUser);
app.use('/api',routesGroup);
app.use('/auth',routesAuth);
app.use('/api',routesControl);
app.use('/api',routesTask);
app.use('/api',routesSymptom);
app.use('/api',routesLocation);
app.use('/api',routesBanner);

module.exports=app;