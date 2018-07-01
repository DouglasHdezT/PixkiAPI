'use strict'

const mongoose = require('mongoose');
const services = require('../services')

const User = require('../models/userModel');

function signUp(){
    user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        nickname: req.body.nickname,
        email: req.body.email,
    });
    
    user.save((err)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        return res.status(200).send({
            token: services.createToken(user)
        })
    });
}

function signIn(){

}

module.exports={
    signIn,
    signUp
}
