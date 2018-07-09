'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
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
        //select:false
    },

    email:{
        type:String,
        require:true
    }, 

    avatar:{
        type:String,
        default: "http://comunicasv.com/assets/avatar/avatar_default.png",
    },

    user_group:[{
        _id:false,
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
        _id:false,
        id_symptom:{
            type:String,
            require:true
        }
    }],

    user_location:[{
        _id:false,
        id_location:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Location',
        }
    }],

    group_request:[{
        _id:false,
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

// userSchema.pre('save',(next)=>{
//     let user = this;

//     bcrypt.genSalt(10, (err, salt)=>{
//         if(err) return next(err);

//         bcrypt.hash(user.password, salt, null,(err, hash)=>{
//             if(err) return next(err);
//             console.log(hash)
//             console.log(user)
//             user.password = hash;
//             console.log(user.password)
//         next();
//         })
//     });
// });

module.exports = mongoose.model("User", userSchema);