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
    },
    descrption:{
        type:String,
        default:"",
        require:true
    },
    group_users:[{
        _id:false,
        id_user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        rol:{
            type:String,
            require:true,
            default: 'member',
            enum: ["admin","member"]
        }
    }],
    group_symptoms:[{
        _id:false,
        id_symptom:{
            type:String,
            require:true
        }
    }],
    group_tasks:[{
        _id:false,
        id_task:{
            type:String,
            require:true
        }
    }]
});
module.exports = mongoose.model("Group",groupSchema);