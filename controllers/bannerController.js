'use strict'
const Banner = require('../models/bannerModel');

function insertBanner(req,res){
    let banner = new Banner();
    banner.route = req.body.route;

    banner.save((err,bannerStg)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });
        res.status(200).send({bannerStg});
    });
}
function getBanners(req,res){
    banner.find((err,res)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        res.status(200).send({banner:[]});
    });
}

module.exports={
    insertBanner,
    getBanners
}