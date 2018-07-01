'use strict'


const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config')


mongoose.connect(config.db,(err, res)=>{
    if(err) throw err;
    console.log('Conexion ricolina');
});

app.listen(config.port, ()=>{
    console.log(`Puto el que lo lea ${config.port}`);
});