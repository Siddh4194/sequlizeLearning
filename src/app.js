const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../models');
const routes = require('./routes');


// *************** Initialization of requirements *******************
const app = express();
app.use(express.json());
// !IMP
// ! if we use express.json then we don't need to use the bodyparser extra
const PORT = process.env.PORT || 3000;
// ******************************************************************
db.sequelize.sync({force:true});

//? routes for the api 
// ******************************************************************
app.use('/api',routes);
app.use('/',(req,res)=>{
    res.send("<h1>Sequalizing DB API</h1>")
})
// ******************************************************************


// ? middleware initialization
app.use(express.json());

module.exports = app;