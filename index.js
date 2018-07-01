'use strict'

const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose')

const User = require('./models/userModel');

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
    console.log('POST/api/user');
    console.log(req.body);
    let user = new User();
    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.nickname = req.body.nickname;
    user.password = req.body.password;
    user.emai = req.body.emai;
    user.avatar = req.avatar;

    user.save((err,productStore)=>{
        if(err) res.status(500).send({message: 'Internal Server Error '+err})

        res.status(200).send({message:productStore})
    });
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