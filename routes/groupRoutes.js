'use strict'
const express = require("express");
const GroupCtrl = require('../controllers/groupController')
const auth = require('../middlewares/auth');
const api = express.Router();

api.get('/group/:groupId',auth,GroupCtrl.getGroup);
api.post('/group',auth,GroupCtrl.insertGroup);
api.put('/group/:groupId',auth,GroupCtrl.updateGroup);
api.delete('/group/:groupId',auth,GroupCtrl.deleteGroup);


//Verificar en caso de error

api.post('/group/user/:groupId',auth,GroupCtrl.insertUserId)

api.post('/group/symptom/:groupId',auth,GroupCtrl.insertSymptomId)

api.post('/group/task/:groupId',auth,GroupCtrl.insertTaskId)

module.exports = api;