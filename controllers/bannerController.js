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
    Banner.find({},(err,banners)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });
        if(!banners) return res.status(500).send({
            message: `No banners ${err}`
        });
        res.status(200).send({banner:banners});
    });
}

module.exports={
    insertBanner,
    getBanners
}