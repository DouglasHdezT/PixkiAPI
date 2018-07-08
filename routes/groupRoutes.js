'use strict'
const express = require("express");
const GroupCtrl = require('../controllers/groupController')
const auth = require('../middlewares/auth');
const api = express.Router();

api.get('/group/:groupId',auth,GroupCtrl.getGroup);
api.get('/group',auth,GroupCtrl.getAllGroups);
api.post('/group',auth,GroupCtrl.insertGroup);
api.put('/group/:groupId',auth,GroupCtrl.updateGroup);
api.delete('/group/:groupId',auth,GroupCtrl.deleteGroup);


//Verificar en caso de error

api.post('/group/user/:groupId',auth,GroupCtrl.insertUserId)
api.delete('/group/user/:groupId',auth,GroupCtrl.deleteUserId)
api.get('/group/user/:groupId',auth,GroupCtrl.getUsersId)

api.post('/group/symptom/:groupId',auth,GroupCtrl.insertSymptomId)
api.delete('/group/symptom/:groupId',auth,GroupCtrl.deleteSymptomId)
api.get('/group/symptom/:groupId',auth,GroupCtrl.getSymptoms)

api.post('/group/task/:groupId',auth,GroupCtrl.insertTaskId)
api.delete('/group/task/:groupId',auth,GroupCtrl.deleteTaskId)
api.get('/group/task/:groupId',auth,GroupCtrl.getTasks)

module.exports = api;