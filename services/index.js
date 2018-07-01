'use strict'

const jwt  =  require('jwt-simple');
const config = require('../config');


function createToken(user){
    const payload = {
        sub: user._id,
        iat: Date.now()
    };
    
    return jwt.encode(payload, config.SECRET);
}

function decodeToken(token){
    const decode = new Promise((resolve,reject)=>{
        try{
            const payload = jwt.decode(token,config.SECRET)

            resolve(payload.sub)
        }catch(err){
            reject({
                status:500,
                message:"Token Invalido"
            });
        }
    });

    return decode
}

module.exports = {
    createToken,
    decodeToken
}