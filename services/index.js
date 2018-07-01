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

module.exports = {
    createToken
}