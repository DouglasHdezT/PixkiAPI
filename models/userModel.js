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
        unique:true,
        require:true
    },

    password:{
        type:String,
        select:false
    },

    email:{
        type:String,
        unique:true,
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
    let user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt)=>{
        if(err) return next(err);

        bcrypt.hash(user.password, salt, null,(err, hash)=>{
            if(err) return next(err);

            user.password = hash;

        next();
        })
    });
});

module.exports = mongoose.model("User", userSchema);