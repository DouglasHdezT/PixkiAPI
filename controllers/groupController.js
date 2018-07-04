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

module.exports ={
    insertGroup,
    deleteGroup,
    getGroup,
    updateGroup
}