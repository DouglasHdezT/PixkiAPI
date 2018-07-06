'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bannerSchema = Schema({
    route:{
        type: String,
        require:true
    }
});

module.exports = mongoose.model("Banner",bannerSchema);