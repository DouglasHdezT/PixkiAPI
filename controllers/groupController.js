'use strict'

const Group = require("../models/groupModel")

function insertGroup(req,res){
    let group = new Group;
    group.name = req.body.name;
    group.banner = req.body.banner;
    group.description = req.body.description;

    group.save((err,groupStorage)=>{
        if (err) return res.status(500).send({message:"Ocurrio un error, verificar valores"})
        res.status(200).send(groupStorage);
    });
};

function deleteGroup(req,res){
    let groupId = req.params.groupId;

    Group.findById(groupId,(err,group)=>{
        if(err) return res.status(500).send({message:"Algo salio mal"});
        if(!group) return res.status(404).send({message:"Grupo no encontrado"});
        group.remove(err =>{
            if(err) return res.status(500).send({message:"Internal Server ERROR 500"});
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

        res.status(200).send(group);
    });
};

function getAllGroups(req, res){
    Group.find(({}, (err, result)=>{
        res.status(200).send(result)
    }))
}

function updateGroup(req,res){
    let groupId = req.params.groupId;
    let update = req.body

    Group.findByIdAndUpdate(groupId,update,(err,groupUpdated)=>{
        if (err) return res.status(500).send({message:"Error al actualizar, verificar datos"});
        res.status(200).send(groupUpdated);
    });
};


function insertUserId(req,res){
    let groupId = req.params.groupId;
    let userId = req.user;
    let rol_type = req.body.rol_type;

    if(userId==null || userId==""){
        return res.status(404).send({
            message:"group not found"
        });
    }

    Group.findById(groupId, (err,group)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});
        if(!group) return res.status(404).send({message: "Group not found"})
        
        group.group_users.forEach((act) => {
            if(act.id_user==userId){
                group.group_users.splice(group.group_users.indexOf(act),1)
            }
        });
    
        group.group_users.push({id_user:userId, rol:rol_type})

        group.save((err,groupSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send({message: "Inserted Succesfully"})
        });
    });
}
function deleteUserId(req,res){
    let groupId = req.params.groupId;
    let userId = req.user;

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
    
        group.save((err,groupSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send({message:"Deleted"})
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

            res.status(200).send(groupSave)
        });
    });
}

function deleteUserId(req,res){
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
    
        group.save((err,groupSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send(groupSave)
        });
    });        

}
function deleteSymptomId(req,res){
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
    
        group.save((err,groupSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send(groupSave)
        });
    });
}

function insertTaskId(req,res){
    let groupId = req.params.groupId;
    let taskId = req.body.taskId;

    if(taskId==null || taskId==""){
        return res.status(404).send({
            message:"group not found"
        });
    }

    Group.findById(groupId, (err,group)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});

        group.group_symptoms.forEach((act) => {
            if(act.id_task==taskId){
                group.group_tasks.splice(group.group_tasks.indexOf(act),1)
            }
        });
    
        group.group_symptoms.push({id_symptom:taskId})

        group.save((err,groupSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send(groupSave)
        });
    });

    
}
function deleteTaskId(req,res){
    let groupId = req.params.groupId;
    let taskId = req.body.taskId;

    if(taskId==null || taskId==""){
        return res.status(404).send({
            message:"group not found"
        });
    }

    Group.findById(groupId, (err,group)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});

        group.group_tasks.forEach((act) => {
            if(act.id_task==taskId){
                group.group_symptoms.splice(group.group_tasks.indexOf(act),1)
            }
        });
    
        group.save((err,groupSave)=>{
            if(err) return res.status(500).send({
                message:"Internal Server Error"
            });

            res.status(200).send(groupSave)
        });
    });

    
}

function getUsersId(req, res){
    let groupId = req.params.groupId;

    Group.findById(groupId, (err, group)=>{
        if(err) return res.status(500).send({message: "Something Wrong"})
        if(!group) return res.status(404).sedn({message:"Not Found"})

        res.status(200).send(group.group_users)
    })
}

function getTasks(req, res){
    let groupId = req.params.groupId;

    Group.findById(groupId, (err, group)=>{
        if(err) return res.status(500).send({message: "Something Wrong"})
        if(!group) return res.status(404).sedn({message:"Not Found"})

        res.status(200).send(group.group_tasks)
    })
}

function getSymptoms(req, res){
    let groupId = req.params.groupId;

    Group.findById(groupId, (err, group)=>{
        if(err) return res.status(500).send({message: "Something Wrong"})
        if(!group) return res.status(404).sedn({message:"Not Found"})

        res.status(200).send(group.group_symptoms)
    })
}

module.exports ={
    insertGroup,
    deleteGroup,
    getGroup,
    getAllGroups,
    updateGroup,
    insertUserId,
    insertSymptomId,
    insertTaskId,
    deleteUserId,
    deleteSymptomId,
    deleteTaskId,
    getUsersId,
    getSymptoms,
    getTasks
}