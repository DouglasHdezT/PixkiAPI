'use strict'
const express = require("express");
const UserCtrl = require('../controllers/userController')
const authorization = require('../middlewares/auth')
const api = express.Router();


api.get('/user/one/:idUsuario',authorization,UserCtrl.getUser);
api.get('/user',authorization,UserCtrl.getSelfUser);

api.put('/user',authorization,UserCtrl.updateUser);

api.delete('/user/:idUsuario',UserCtrl.deleteUser); //TODO SOlo por pruebas borrar luego.
api.delete('/user',authorization,UserCtrl.deleteSelfUser);

api.post('/user/groups',authorization, UserCtrl.insertGroupId)
api.delete('/user/groups/:idGroup',authorization, UserCtrl.deleteGroupId)
api.get('/user/groups', authorization, UserCtrl.getAllGroups);

api.post('/user/symptoms',authorization, UserCtrl.insertSymptom)
api.delete('/user/symptoms/:idSymptom',authorization, UserCtrl.deleteSymptom)
api.get('/user/symptoms', authorization, UserCtrl.getAllSymptoms);

api.post('/user/locations',authorization, UserCtrl.insertLocation)
api.delete('/user/locations/:idLocation',authorization, UserCtrl.deleteLocation)
api.get('/user/locations', authorization, UserCtrl.getAllLocations);

api.post('/user/requests',authorization, UserCtrl.insertRequest)
api.post('/user/group-requests',authorization, UserCtrl.insertSpecificRequest)
api.delete('/user/requests/:idGroup',authorization, UserCtrl.deleteRequest)
api.get('/user/requests', authorization, UserCtrl.getAllRequests);

module.exports = api;