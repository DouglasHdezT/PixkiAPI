'use strict'
const express = require('express');
const controlCtrl = require('../controllers/controlController');
const auth = require('../middlewares/auth');
const api = express.Router();

api.put('/control',auth,controlCtrl.insertControl);
api.get('/control/:controlId',auth,controlCtrl.getControl);
api.put('/control/:controlId',auth,controlCtrl.updateControl);
api.delete('/control/:controlId',auth,controlCtrl.deleteControl);

module.exports = api;