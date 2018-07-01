'use strict'

const User = require('../models/userModel');
const services = require('../services');

function getUser(req, res){
    let userId = req.params.idUsuario;

    console.log('gg izi')
    console.log(req.user);

    User.findById(userId, (err, user)=>{
        if(err) return res.status(500).send({message:`Something is wrong!: ${err}`});
        
        if(!user) return res.status(404).send({message:`The user doesnt exist`});

        res.status(200).send({user});
    });
};

function deleteUser(req, res){
    let userId =  req.params.idUsuario;

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
    let userId = req.params.idUsuario
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