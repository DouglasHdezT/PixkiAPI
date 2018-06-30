'use strict'

const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose')

const app =  express();
const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/api/users', (req,res)=>{
    res.status(200).send({usuarios:[]});
});

app.get('/api/user/:idUsuario',(req,res)=>{

});

app.post('/api/user',(req,res)=>{
    console.log(req.body);
    res.status(200).send({message:"Usuario Ingresado"});
});

app.put('/api/user/:idUsuario',(req,res)=>{

});

app.delete('/api/user/:idUsuario',(req,res)=>{

});

mongoose.connect('mongodb://localhost:27017/PixkiAPI',(err, res)=>{
    if(err) throw err;
    console.log('Conexion ricolina');
});

app.listen(port, ()=>{
    console.log(`Puto el que lo lea ${port}`);
});