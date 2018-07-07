'use strict'
const Avatar = require('../models/avatarModel');

function insertAvatar(req,res){
    let avatar = new Avatar();
    avatar.route = req.body.route;

    avatar.save((err,avatarStrg)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });
        res.status(200).send({avatarStrg});
    });
}
function getAvatars(req,res){
    Avatar.find({},(err,avatars)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });
        if(!avatars) return res.status(500).send({
            message: `No avatars ${err}`
        });
        res.status(200).send(avatars);
    });
}

module.exports={
    insertAvatar,
    getAvatars
}