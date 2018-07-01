'use strict'


const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config')


mongoose.connect(config.db,(err, res)=>{
    if(err) throw err;
    console.log('Conexion a base de datos Mongo Establecida');
});

app.listen(config.port, ()=>{
    console.log(`API escuchadno desde puerto ${config.port}`);
});