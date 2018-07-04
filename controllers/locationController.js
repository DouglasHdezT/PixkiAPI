'use strict'
const Location = require('../models/locationModel')

function insertLocation(req,res){
    let location = new Location()

    location.altitude = req.body.altitude
    location.latitude = req.body.latitude
    location.name = req.body.name

    location.save((err, locationStg)=>{
        if(err) return res.status(500).send({message:"Something Wrong!"})
        res.status(200).send({locationStg})
    })
}

function getLocation(req, res){
    locationId = req.params.locationId
    Location.findById(locationId,(err, location)=>{
        if(err) return res.status(500).send({message:"Somethig Wrong!"})
        if(!location) return res.status(404).send({message:"Location not found"})

        res.status(200).send({location})
    })
}

function deleteLocation(req,res){
    let locationId = req.params.locationId

    Location.findById(locationId,(err,location)=>{
        if(err) return res.status(500).send({message: "Something Wrong!"})
        if(!location) return res.status(404).send({message:"Not found"})

        location.remove(err=>{
            if(err) return res.status(500).send({message: "Something Wrong!"})
            res.status(200).send({message:"Location removed"})
        })

    })
}

function updateLocation(){
    let locationId = req.params.locationId
    let update = req.body;
    
    Location.findByIdAndUpdate(locationId, update, (err, location)=>{
        if(err) return res.status(500).send({message: "Something Wrong!"})
        res.status(200).send({location})
    })
}

module.exports={
    insertLocation,
    getLocation,
    deleteLocation,
    updateLocation
}