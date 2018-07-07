'use strict'

const express = require('express');
const avatarCtrl = require('../controllers/avatarController');
const api = express.Router();

api.post('/avatar',avatarCtrl.insertBanner);
api.get('/avatar',avatarCtrl.getBanners);

module.exports = api;