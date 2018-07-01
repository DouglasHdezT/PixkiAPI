'use strict'

const User = require('../models/userModel');

function insertUser(req, res){
    let user = new User();
    let rq = req.body;

    user.first_name = rq.first_name;
    user.last_name = rq.last_name;
    user.nickname = rq.nickname;
    user.password = rq.password;
    user.email = rq.email;
    user.avatar = rq.avatar;

    user.save((err, userStg)=>{
        if (err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        res.status(200).send({userStg});
    });
};

function getUser(req, res){
    let userId = req.params.userId;

    User.findById(userId, (err, user)=>{
        if(err) return res.status(500).send({message:`Something is wrong!: ${err}`});
        
        if(!user) return res.status(404).send({message:`The user doesnt exist`});

        res.status(200).send({user});
    });
};

function deleteUser(req, res){
    let userId =  req.params.userId;

    User.findById(userId, (err, userDel)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        userDel.remove(err=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!: ${err}`
            });

            res.status(200).send({
                message: "Delete succesfull"
            });
        });
    });
};

function updateUser(req, res){
    let userId = req.params.userId
    let update = req.body

    User.findByIdAndUpdate(userId, update, (err, userUp)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        res.status(200).send({
            userUp
        })
    });
};

function insertGroupId(req, res){

}

function insertSymptom(req, res){

}

function insertLocation(req, res){

}

function deleteGroupId(req, res){

}

function deleteSymptom(req, res){

}

function deleteLocation(req, res){
    
}

module.exports = {
    insertUser,
    getUser,
    deleteUser,
    updateUser,
    insertGroupId,
    insertSymptom,
    insertLocation,
    deleteGroupId,
    deleteSymptom,
    deleteLocation
}