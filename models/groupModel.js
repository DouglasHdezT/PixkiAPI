'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = Schema({
    name:{
        type:String,
        require:true
    },
    banner:{
        type:String,
        default:"",
        require:false
    }
});
module.exports = mongoose.model("Group",groupSchema);