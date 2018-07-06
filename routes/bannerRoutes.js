'use strict'

const express = require('express');
const bannerCtrl = require('../controllers/bannerController');
const api = express.Router();

api.post('/banner',bannerCtrl.insertBanner);
api.get('/banner',bannerCtrl.getBanners);

module.exports = api;