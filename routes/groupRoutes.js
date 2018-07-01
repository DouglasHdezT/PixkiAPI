'use strict'
const express = require("express");
const GroupCtrl = require('../controllers/groupController')
const auth = require('../middlewares/auth');
const api = express.Router();

api.get('/group/:groupId',auth,GroupCtrl.getGroup);
api.post('/group',auth,GroupCtrl.insertGroup);
api.put('/group/:groupId',auth,GroupCtrl.updateGroup);
api.delete('/group/:groupId',auth,GroupCtrl.deleteGroup);

module.exports = api;