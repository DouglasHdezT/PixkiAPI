'use strict'
const express = require("express");
const UserCtrl = require('../controllers/userController')
const authorization = require('../middlewares/auth')
const api = express.Router();


api.get('/user/:idUsuario',authorization,UserCtrl.getUser);
api.put('/user/:idUsuario',UserCtrl.updateUser);
api.delete('/user/:idUsuario',UserCtrl.deleteUser);

module.exports = api;