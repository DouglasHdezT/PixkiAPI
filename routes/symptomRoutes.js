'use strict'
const express = require('express');
const symptomCtrl = require('../controllers/symptomController');
const auth = require('../middlewares/auth');
const api = express.Router();

api.post('/symptom',auth,symptomCtrl.insertSymptom);
api.get('/symptom/:symptomId',auth,symptomCtrl.getSymptom);
api.put('/symptom/:symptomId',auth,symptomCtrl.updateSymptom);
api.delete('/symptom/:symptomId',auth,symptomCtrl.deleteSymptom);

module.exports = api;