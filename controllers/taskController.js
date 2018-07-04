'use strict'
const Task = require('../models/taskModel');

function insertTask(req,res){
    let task = new Task();

    task.name = req.body.name;
    task.description = req.body.description;
    task.date_time = req.body.date_time;
    task.repeat = req.body.repeat;

    task.save((err,taskStorage)=>{
        if(err) return res.staus(500).send({message:"Something is wrong"});
    });
    res.staus(200).send({taskStorage});
}
function getTask(req,res){
    let taskId = req.params.taskId;

    Task.findById(taskId,(err,task)=>{
            if(err) return res.staus(500).send({message:"Internal server error"});
            if(!task) return res.staus(403).send({message:"Not found"});

            res.staus(200).send({task});
    });
}
function updateTask(req,res){
    let taskId = req.params.taskId;
    let update = req.body;

    Task.findByIdAndUpdate(taskId,update,(err,taskUpdated)=>{
        if(err) return res.staus(500).send({message:"Internal Error Server"});
        res.staus(200).send({task:taskUpdated});
    });
}
function deleteTask(req,res){
    let taskId = req.params.taskId;

    Task.findById(taskId,(err,task)=>{
        if(err) return res.staus(500).send({message:"Internal Error Server"});
        task.remove(err=>{
            if(err) return req.staus(500).send({message:"Internal Error"});
            if(!task) return req.staus(404).send({message:"Not found"});
            res.staus(200).send({message:"sucesses"});
        });
    });
}


module.exports={
    insertTask,
    getTask,
    deleteTask,
    updateTask
}