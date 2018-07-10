'use strict'
const Symptom = require('../models/symptomModel');

function insertSymptom(req,res){
    let symptom = new Symptom();
    symptom.name = req.body.name;
    symptom.description = req.body.description;

    symptom.save((err,symptomStorage)=>{
        if(err) return res.status(500).save({message:"Internal Server Error"});
        res.status(200).send(symptomStorage);
    });
}
function getSymptom(req,res){
    let symptomId = req.params.symptomId;
    Symptom.findById(symptomId,(err,symptom)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});
        if(!symptom) return res.status(404).send({message:"Not found"})

        res.status(200).send({symptom});
    });
}
function updateSymptom(req,res){
    let symptomId = req.params.symptomId;
    let update = req.body;

    Symptom.findByIdAndUpdate(symptomId,update,(err,symptomUpdated)=>{
        if(err) return res.status(500).save({message:"Internal Server Error"});
        res.status(200).send({symptom:symptomUpdated});
    });
}
function deleteSymptom(req,res){
    let symptomId = req.params.symptomId;

    Symptom.findById(symptomId,(err,symptom)=>{
        if(err) return res.status(500).send({message:"Internal Server Error"});
        if(!symptom) return res.status(404).send({message:"Not found"})

        symptom.remove(err =>{
            if(err) return res.status(500).send({message:"Internal Server Error"});
            res.status(200).send({message:"sintoma eliminado"});
        });
        
    });
}

module.exports={
    insertSymptom,
    getSymptom,
    updateSymptom,
    deleteSymptom
}