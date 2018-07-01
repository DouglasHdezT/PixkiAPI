'use strict'
const express = require("express");
const UserCtrl = require('../controllers/userController')
const authorization = require('../middlewares/auth')
const api = express.Router();


api.get('/user/:idUsuario',UserCtrl.getUser);
api.post('/user',authorization,UserCtrl.insertUser);
api.put('/user/:idUsuario',UserCtrl.updateUser);
api.delete('/user/:idUsuario',UserCtrl.deleteUser);

module.exports = api;