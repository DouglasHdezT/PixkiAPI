'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    first_name:{
        type: String, 
        require: true
    },
    
    last_name:{
        type: String,
        require :true
    },

    nickname:{
        type:String,
        require:true
    },

    password:{
        type:String,
        require:true
    },

    email:{
        type:String,
        require:true
    }, 

    avatar:{
        type:String,
        default: "",
        require:true
    },

    user_group:[{
        id_group:{
            type:String,
            require:true
        },
        rol:{
            type:String,
            require:true,
            default: "member",
            enum:["admin","member"]
        }
    }],

    group_request:[{id_group:String}]
});

module.exports = mongoose.model("User", userSchema);