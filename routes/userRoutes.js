'use strict'
const express = require("express");
const UserCtrl = require('../controllers/userController')
const api = express.Router();

api.get('/user/:idUsuario',UserCtrl.getUser);
api.post('/user',UserCtrl.insertUser);
api.put('/user/:idUsuario',UserCtrl.updateUser);
api.delete('/user/:idUsuario',UserCtrl.deleteUser);

module.exports = api;