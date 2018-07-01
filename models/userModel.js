'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

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
        select:false
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
    user_symptom:[{
        id_symptom:{
            type:String,
            require:true
        }
    }],

    user_location:[{
        id_location:{
            type:String,
            require:true
        }
    }],

    group_request:[{
        id_group:String
    }],

    singup_date:{
        type:Date,
        default:Date.now()
    },

    last_login:{
        type:Date
    }
});

userSchema.pre('save',(next)=>{
    if(!user.isModified('password')) return next()
});

module.exports = mongoose.model("User", userSchema);