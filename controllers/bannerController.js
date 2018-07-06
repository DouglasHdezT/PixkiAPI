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
function getBanners(req,banners){
    let banner = new Banner();
    banner.find((err,res)=>{
        if(err) return res.status(500).send({
            message: `Something is wrong!: ${err}`
        });

        re.status(200).send(banners);
    });
}

module.exports={
    insertBanner,
    getBanners
}