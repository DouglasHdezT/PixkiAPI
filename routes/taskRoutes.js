'use strict'

const express = require('express');
const taskCtrl = require('../controllers/taskController');
const auth = require("../middlewares/auth");
const api = express.Router();

api.post('/task',auth,taskCtrl.insertTask);
api.get('/task/:taskId',auth,taskCtrl.getTask);
api.put('/task/:taskId',auth,taskCtrl.updateTask);
api.delete('/task/:taskId',auth,taskCtrl.deleteTask);

module.exports = api;