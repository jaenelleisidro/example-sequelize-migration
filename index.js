const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sequelize', 'root', '', {host: 'localhost',dialect:'mysql'});//dialect can be 'mysql' | 'mariadb' | 'postgres' | 'mssql'
const User = sequelize.define('user', {firstName:DataTypes.STRING,lastName:DataTypes.STRING});
const start=async ()=>{
    await sequelize.authenticate();
    await sequelize.sync();//create tables on db if they don't exist yet
    console.log('Connection has been established successfully.');
    let {models}=sequelize;
    let users=await models.user.findAll();
    if(users.length>0){
        await models.user.destroy({where:{},truncate:true});
        // return;
    }
    models.user.create({firstName:"jay",lastName:"isidro"});
}



start().catch((e)=>{console.error('Unable to connect to the database:', e);})



const express = require('express')
const app = express()
app.listen(5000, () => console.log('Server Running at port 5000, try http://localhost:5000/list'))


app.get("/list",async (req,res)=>{
    let data=await sequelize.models.user.findAll();
    res.json({status:"success",data});
});
