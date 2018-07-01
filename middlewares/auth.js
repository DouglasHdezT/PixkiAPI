'use strict'

const jwt = require('jwt')
const config = require('../config')

function isAuth (req,res,next){
    if(!req.headers.authorization){
        return res.status(403).send({message:"No se tiene acceso"})
    }

    const token = req.headers.authorization.split(" ")[1]
    const playload = jwt.decode(token,config.SECRET_TOKEN)

    req.user = playload.sub
    next();
}

module.exports = isAuth