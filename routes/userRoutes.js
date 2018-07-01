'use strict'
const express = require("express");
const UserCtrl = require('../controllers/userController')
const api = express.Router();

const auth = require('../middlewares/auth')

api.get('/user/:idUsuario',UserCtrl.getUser);
api.post('/user',UserCtrl.insertUser);
api.put('/user/:idUsuario',auth.isAuth,UserCtrl.updateUser);
api.delete('/user/:idUsuario',UserCtrl.deleteUser);

module.exports = api;