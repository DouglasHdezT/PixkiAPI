'use strict'

const express = require("express");
const authCtrl = require('../controllers/auth')
const api = express.Router();


api.post('/login', authCtrl.signIn);
api.post('/signup', authCtrl.signUp);

module.exports=api;