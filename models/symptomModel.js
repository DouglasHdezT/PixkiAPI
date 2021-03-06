'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const symptonSchema = Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true,
        default: ""
    },
    date_time:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Symptom",symptonSchema);