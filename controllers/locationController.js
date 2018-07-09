'use strict'
const Location = require('../models/locationModel')
const User = require('../models/userModel')

function insertLocation(req,res){
    let id_user = req.user

    let location = new Location()

    location.altitude = req.body.altitude
    location.latitude = req.body.latitude

    location.save((err, locationStg)=>{
        
        if(err) return res.status(500).send({message:"Something Wrong!"})

        let locationId = locationStg._id

        User.findById(id_user, (err, usr)=>{
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
                
                res.status(200).send({message:"Inserted"})
            })
        })
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