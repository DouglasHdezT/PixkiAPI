'use strict'

const express = require('express');
const avatarCtrl = require('../controllers/avatarController');
const api = express.Router();

api.post('/avatar',avatarCtrl.insertAvatar);
api.get('/avatar',avatarCtrl.getAvatars);

module.exports = api;