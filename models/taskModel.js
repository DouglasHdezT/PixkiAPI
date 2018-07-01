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
        type:boolean,
        require:true,
        default:true
    },
    status:{
        type:boolean,
        require: true,
        default: false
    },
    id_user:{
        type:String
    }
});

module.exports = mongoose.model("Task",taskSchema);