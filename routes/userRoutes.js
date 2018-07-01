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

module.exports = api;