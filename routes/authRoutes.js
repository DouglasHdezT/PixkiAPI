'use strict'

const express = require("express");
const authCtrl = require('../controllers/auth')
const api = express.Router();


api.post('/login', authCtrl.signIn);
api.post('/signup', authCtrl.signUp);
api.post('/verf', authCtrl.verifyUser);
api.post('/usr_id', authCtrl.verifyUserAndId);

module.exports=api;