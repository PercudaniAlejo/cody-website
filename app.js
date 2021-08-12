// const express = require('express');
import express from 'express';
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

import dotenv from 'dotenv'
dotenv.config({path:'./env/.env'});

app.use('/resources', express.static('src'));
var __dirname;
app.use('/resources', express.static(__dirname + '/src'));

app.set('view engine', 'ejs');

// import bcryptjs from 'bcryptjs'

import session from 'express-session'

// import './src/index'

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// Llamar al modulo de conexion de DB
    import  './database/db.js'


app.get('/', (req, res) => {
    res.send("aaaaa");
})

app.listen(3000, (req, res) => {
    console.log("")
});
