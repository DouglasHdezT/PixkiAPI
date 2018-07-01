'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = Schema({
    altitude:{
        type: String,
        require :true
    },

    latitude:{
        type:String,
        require: true
    },

    name:{
        type:String,
        require:true
    },

    date_time:{
        type:Date,
        require:true,
        default:Date.now
    }
});