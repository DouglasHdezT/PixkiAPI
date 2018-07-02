'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = Schema({
    name:{
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    date_time:{
        type:Date,
        require:true
    },
    repeat:{
        type:String,
        require:true,
        default:"true"
    },
    status:{
        type:String,
        require: true,
        default: "false"
    },
});

module.exports = mongoose.model("Task",taskSchema);