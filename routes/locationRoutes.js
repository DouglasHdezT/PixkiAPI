'use strict'
const express = require('express');
const locationCtrl = require('../controllers/locationController');
const auth = require('../middlewares/auth');
const api = express.Router();

api.post('/location',auth,locationCtrl.insertLocation);
api.get('/location/:locationId',auth,locationCtrl.getLocation);
api.put('/location/:locationId',auth,locationCtrl.updateLocation);
api.delete('/location/:locationId',auth,locationCtrl.deleteLocation);

module.exports = api;