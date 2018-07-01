'use strict'

const Control = require('../models/controlModel');

function insertControl(req, res){

    let control = new Control();
    let bd = req.body;

    control.name = bd.name;
    control.description = bd.description;
    control.date_time = bd.date_time;
    control.repeat = bd.repeat;
    control.status = bd.status;
    control.id_user = bd.id_user;

    control.save((err, controlStg)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        res.status(200).send({controlStg});

    });

}

function getControl(req, res){
    let controlId = req.params.controlId;
    Control.findById(controlId,(err,control)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});
        if(!control) return res.status(403).send({message:"Not found"});

        res.status(200).send({control});
    });
}

function updateControl(req, res){
    let controlId = req.params.groupId;
    let update = req.body;

    Control.findByIdAndUpdate(groupId,update,(err,controlUpdated)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});
        res.status(200).send({control:controlUpdated})
    });
}

function deleteControl(req, res){
    let controlId = req.params.controlId;

    Control.findById(groupId,(err,control)=>{
        if(err) return res.status(500).send({message:"Ocurrio un error interno"});

        control.remove(err =>{
            if(err) return res.status(500).send({message:"Internal Error Server"});
            res.status(200).send({message:"control eliminado correctamente"});
        });
    });
}

module.exports={
    insertControl,
    getControl,
    updateControl,
    deleteControl
}