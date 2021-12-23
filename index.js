const { Sequelize, DataTypes } = require('sequelize');

const db=require("./models");

const express = require('express')
const app = express()
app.listen(5000, () => console.log('Server Running at port 5000, try http://localhost:5000/list'))


app.get("/list",async (req,res)=>{
    let data=await db.user.findAll();
    res.json({status:"success",data});
});
