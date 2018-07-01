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
    
}

function updateControl(req, res){
    
}

function deleteControl(req, res){
    
}

module.exports={
    insertControl,
    getControl,
    updateControl,
    deleteControl
}