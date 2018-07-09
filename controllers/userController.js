'use strict'

const User = require('../models/userModel');
const Group = require('../models/groupModel');
const services = require('../services');

function getUser(req, res){
    let userId = req.params.idUsuario;

    User.findById(userId, (err, user)=>{
        if(err) return res.status(500).send({message:`Something is wrong!: ${err}`});
        
        if(!user) return res.status(404).send({message:`The user doesnt exist`});

        res.status(200).send(user);
    });
};

function getSelfUser(req, res){
    let userId = req.user;

    User.findById(userId, (err, user)=>{
        if(err) return res.status(500).send({message:`Something is wrong!: ${err}`});
        
        if(!user) return res.status(404).send({message:`The user doesnt exist`});

        res.status(200).send(user);
    });
};

function deleteUser(req, res){
    let userId =  req.params.idUsuario;

    User.findById(userId, (err, userDel)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        if(!userDel) return res.status(404).send({message:"Grupo no encontrado"});

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

        res.status(200).send({message:"Updated"})
    });
};

function insertGroupId(req, res){
    let userId = req.user;
    let groupId = req.body.group_id;
    let rol_buff = req.body.rol_type;

    if(groupId == null || groupId == ""){
        return res.status(400).send({
            message: `Bad Request!`
        });
    }

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        usr.user_group.forEach((act)=>{
            if(act.id_group == groupId){
                usr.user_group.splice(usr.user_group.indexOf(act),1);
            }
        });

        usr.user_group.push({id_group:groupId, rol: rol_buff})

        usr.save((err, usrSaved)=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!`
            });
            
            res.status(200).send({message: "Inserted succefully"})
        });
    });
}

function insertSymptom(req, res){
    let userId = req.user;
    let symptomId = req.body.symptom_id;

    if(symptomId == null || symptomId == ""){
        return res.status(400).send({
            message: `Bad Request!`
        });
    }

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
            
            res.status(200).send(usrSaved)
        });
    });
}

function insertLocation(req, res){
    let userId = req.user;
    let locationId = req.body.location_id;

    if(locationId == null || locationId == ""){
        return res.status(400).send({
            message: `Bad Request!`
        });
    }

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

        while(usr.user_location.length > 5){
            usr.user_location.shift();
        }

        usr.save((err, usrSaved)=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!`
            });
            
            res.status(200).send(usrSaved)
        });
    });
}

function insertRequest(req, res){
    let userId = req.user;
    let groupId = req.body.group_id;

    if(groupId == null || groupId == ""){
        return res.status(400).send({
            message: `Bad Request!`
        });
    }

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
            
            res.status(200).send(usrSaved)
        });
    });
}

function insertSpecificRequest(req, res){
    let userId = req.body.user_id;
    let groupId = req.body.group_id;

    if(groupId == null || groupId == ""){
        return res.status(400).send({
            message: `Bad Request!`
        });
    }

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
            
            res.status(200).send({message: "Insert succesfully"})
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
            
            res.status(200).send({message: "Deleted!"})
        });
    });
}

function deleteSymptom(req, res){
    let userId = req.user;
    let symptomId = req.params.idSymptom;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        usr.user_symptom.forEach((act)=>{
            if(act.id_symptom == symptomId){
                usr.user_symptom.splice(usr.user_symptom.indexOf(act),1);
            }
        });

        usr.save((err, usrSaved)=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!`
            });
            
            res.status(200).send(usrSaved)
        });
    });
}

function deleteLocation(req, res){
    let userId = req.user;
    let locationId = req.params.idLocation;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        usr.user_location.forEach((act)=>{
            if(act.id_location == locationId){
                usr.user_location.splice(usr.user_location.indexOf(act),1);
            }
        });

        usr.save((err, usrSaved)=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!`
            });
            
            res.status(200).send(usrSaved)
        });
    });
}

function deleteRequest(req, res){
    let userId = req.user;
    let groupId = req.params.idGroup;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!`
        });

        usr.group_request.forEach((act)=>{
            if(act.id_group == groupId){
                usr.group_request.splice(usr.group_request.indexOf(act),1);
            }
        });

        usr.save((err, usrSaved)=>{
            if(err) return res.status(500).send({
                message: `Something is wrong!`
            });
            
            res.status(200).send({message:"Deleted Succefully"})
        });
    });
}

function getAllGroups(req,res){
    let userId = req.user;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something Wrong!`
        })

        res.status(200).send(usr.user_group);
    });
}

function getAllSymptoms(req,res){
    let userId = req.user;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something Wrong!`
        })

        res.status(200).send(usr.user_symptom);
    });
}

function getAllLocations(req,res){
    let userId = req.user;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something Wrong!`
        })

        res.status(200).send(usr.user_location);
    });
}

function getAllLocationsPUser(req,res){
    let userId = req.params.id_user;

    User.findById(userId)
    .populate('user_location')
    .exec((err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something Wrong!`
        })

        res.status(200).send(usr.user_location);
    });
}

function getAllRequests(req,res){
    let userId = req.user;

    User.findById(userId, (err, usr)=>{
        if(err) return res.status(500).send({
            message: `Something Wrong!`
        })

        res.status(200).send(usr.group_request);
    });
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
    insertRequest,
    insertSpecificRequest,
    deleteGroupId,
    deleteSymptom,
    deleteLocation,
    deleteRequest,
    getAllGroups,
    getAllSymptoms,
    getAllLocations,
    getAllLocationsPUser,
    getAllRequests
}