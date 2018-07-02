'use strict'

const services = require('../services')

const User = require('../models/userModel');

function signUp(req, res){
   let user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password
    });
    
    user.save((err)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        res.status(200).send({
            token: services.createToken(user)
        })
    });
}

function signIn(req, res){
    User.find({nickname:req.body.nickname},(err,user)=>{
        if(err) return res.status(500).send({message:"Error interno"})

        if(!user) return res.status(404).send({message:"Not found"})

        if(user[0].password != req.body.password){
            return res.status(403).send({
                message: `Invalid Credentials!`
            });
        }

        req.user = user[0]
        res.status(200).send({
            token: services.createToken(user[0])
        });
    });
}

module.exports={
    signIn,
    signUp
}
