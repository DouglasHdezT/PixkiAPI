'use strict'
const express = require("express");
const GroupCtrl = require('../controllers/groupController')
const api = express.Router();

api.get('/group/:groupId',GroupCtrl.getGroup);
api.post('/group',GroupCtrl.insertGroup);
api.put('/group/:groupId',GroupCtrl.updateGroup);
api.delete('/group/:groupId',GroupCtrl.deleteGroup);

module.exports = api;