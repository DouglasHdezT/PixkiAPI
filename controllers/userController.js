'use strict'

const User = require('../models/userModel');
const services = require('../services');

function getUser(req, res){
    let userId = req.params.idUsuario;

    User.findById(userId, (err, user)=>{
        if(err) return res.status(500).send({message:`Something is wrong!: ${err}`});
        
        if(!user) return res.status(404).send({message:`The user doesnt exist`});

        res.status(200).send({user});
    });
};

function getSelfUser(req, res){
    let userId = req.user;

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

function deleteSelfUser(req, res){
    let userId =  req.user;

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
    let userId = req.user
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
    let userId = req.user;
    let groupId = req.body.group_id;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        usr.user_group.forEach((act)=>{
            if(act.id_group == groupId){
                usr.user_group.splice(usr.user_group.indexOf(act),1);
            }
        });

        usr.user_group.push({id_group:groupId})

        usr.save((err, usrSaved)=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!`
            });
            
            res.status(200).send({usrSaved})
        });
    });
}

function insertSymptom(req, res){
    let userId = req.user;
    let symptomId = req.body.symptom_id;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        usr.user_symptom.forEach((act)=>{
            if(act.id_symptom == symptomId){
                usr.user_symptom.splice(usr.user_symptom.indexOf(act),1);
            }
        });

        usr.user_symptom.push({id_symptom:symptomId})

        usr.save((err, usrSaved)=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!`
            });
            
            res.status(200).send({usrSaved})
        });
    });
}

function insertLocation(req, res){
    let userId = req.user;
    let locationId = req.body.location_id;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        usr.user_location.forEach((act)=>{
            if(act.id_location == locationId){
                usr.user_location.splice(usr.user_location.indexOf(act),1);
            }
        });

        usr.user_location.push({id_location:locationId})

        usr.save((err, usrSaved)=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!`
            });
            
            res.status(200).send({usrSaved})
        });
    });
}

function insertRequest(req, res){
    let userId = req.user;
    let groupId = req.body.group_id;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        usr.group_request.forEach((act)=>{
            if(act.id_group == groupId){
                usr.group_request.splice(usr.group_request.indexOf(act),1);
            }
        });

        usr.group_request.push({id_group:groupId})

        usr.save((err, usrSaved)=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!`
            });
            
            res.status(200).send({usrSaved})
        });
    });
}

function deleteGroupId(req, res){
    let userId = req.user;
    let groupId = req.params.idGroup;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        usr.user_group.forEach((act)=>{
            if(act.id_group == groupId){
                usr.user_group.splice(usr.user_group.indexOf(act),1);
            }
        });

        usr.save((err, usrSaved)=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!`
            });
            
            res.status(200).send({usrSaved})
        });
    });
}

function deleteSymptom(req, res){

}

function deleteLocation(req, res){
    
}

module.exports = {
    getUser,
    getSelfUser,
    deleteUser,
    deleteSelfUser,
    updateUser,
    insertGroupId,
    insertSymptom,
    insertLocation,
    deleteGroupId,
    deleteSymptom,
    deleteLocation
}