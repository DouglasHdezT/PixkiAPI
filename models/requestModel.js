'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema= Schema({
    id_user:{
        type: String,
        require: true
    },

    id_group:{
        type: String,
        require: true
    }
});