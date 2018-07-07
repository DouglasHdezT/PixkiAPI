'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const avatarSchema = Schema({
    route:{
        type: String,
        require:true
    }
});

module.exports = mongoose.model("Avatar",avatarSchema);