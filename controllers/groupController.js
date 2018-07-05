'use strict'

const Group = require("../models/groupModel")

function insertGroup(req,res){
    let group = new Group;
    group.name = req.body.name;
    group.banner = req.body.banner;

    group.save((err,groupStorage)=>{
        if (err) return res.status(500).send({message:"Ocurrio un error, verificar valores"})
        res.status(200).send({group:groupStorage});
    });
};

function deleteGroup(req,res){
    let groupId = req.params.groupId;

    Group.findById(groupId,(err,group)=>{
        if(err) res.status(500).send({message:"Algo salio mal"});

        group.remove(err =>{
            if(err) res.status(500).send({message:"Internal Server ERROR 500"});
            if(!group) return req.staus(404).send({message:"Not found"});
            res.status(200).send({message:"success"})
        });
    });
};

function getGroup(req,res){

    let groupId = req.params.groupId;
    Group.findById(groupId,(err,group)=>{
        if(err) return res.status(500).send({message: "Intertal Server Error"});

        if(!group) return res.status(404).send({message:"Error 404, Not found"});

        res.status(200).send({group});
    });
};

function updateGroup(req,res){
    let groupId = req.params.groupId;
    let update = req.body

    Group.findByIdAndUpdate(groupId,update,(err,groupUpdated)=>{
        if (err) return res.status(500).send({message:"Error al actualizar, verificar datos"});
        res.status(200).send({group:groupUpdated});
    });
};


function insertUserId(req,res){
    let groupId = req.params.groupId;
    let userId = req.body.userId;

    if(userId==null || userId==""){
        return res.status(404).send({
            message:"group not found"
        });
    }

    Group.findById(groupId, (err,group)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});

        group.group_users.forEach((act) => {
            if(act.id_user==userId){
                group.group_users.splice(group.group_users.indexOf(act),1)
            }
        });
    
        group.group_users.push({id_user:userId})

        group.save((err,groupSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send({groupSave})
        });
    });
}

function insertSymptomId(req,res){
    let groupId = req.params.groupId;
    let symptomId = req.body.symptomId;

    if(symptomId==null || symptomId==""){
        return res.status(404).send({
            message:"group not found"
        });
    }

    Group.findById(groupId, (err,group)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});

        group.group_symptoms.forEach((act) => {
            if(act.id_symptom==symptomId){
                group.group_symptoms.splice(group.group_symptoms.indexOf(act),1)
            }
        });
    
        group.group_symptoms.push({id_symptom:symptomId})

        group.save((err,groupSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send({groupSave})
        });
    });
}

function insertTaskId(req,res){
    let groupId = req.params.groupId;
    let symptomId = req.body.symptomId;

    if(symptomId==null || symptomId==""){
        return res.status(404).send({
            message:"group not found"
        });
    }

    Group.findById(groupId, (err,group)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});

        group.group_symptoms.forEach((act) => {
            if(act.id_symptom==symptomId){
                group.group_symptoms.splice(group.group_symptoms.indexOf(act),1)
            }
        });
    
        group.group_symptoms.push({id_symptom:symptomId})

        group.save((err,groupSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send({groupSave})
        });
    });

    
}


module.exports ={
    insertGroup,
    deleteGroup,
    getGroup,
    updateGroup,
    insertUserId,
    insertSymptomId,
    insertTaskId
}