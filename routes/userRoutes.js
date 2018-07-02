'use strict'
const express = require("express");
const UserCtrl = require('../controllers/userController')
const authorization = require('../middlewares/auth')
const api = express.Router();


api.get('/user/:idUsuario',authorization,UserCtrl.getUser);
api.get('/user',authorization,UserCtrl.getSelfUser);

api.put('/user/',authorization,UserCtrl.updateUser);

api.delete('/user/:idUsuario',UserCtrl.deleteUser); //TODO SOlo por pruebas borrar luego.
api.delete('/user/',authorization,UserCtrl.deleteSelfUser);

api.post('/user/groups',authorization, UserCtrl.insertGroupId)
api.delete('/user/groups/:idGroup',authorization, UserCtrl.deleteGroupId)

api.post('/user/symptoms',authorization, UserCtrl.insertSymptom)
api.delete('/user/symptoms/:idSymptom',authorization, UserCtrl.deleteSymptom)

api.post('/user/locations',authorization, UserCtrl.insertLocation)
api.delete('/user/locations/:idLocations',authorization, UserCtrl.deleteLocation)

api.post('/user/requests',authorization, UserCtrl.insertRequest)
api.delete('/user/requests/:idGroup',authorization, UserCtrl.deleteRequest)

module.exports = api;