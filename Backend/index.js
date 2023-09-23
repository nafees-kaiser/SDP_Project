const dotenv = require('dotenv');
const mongoose= require('mongoose');
const express= require('express');
const app = express();
dotenv.config({path:'./config.env'});
require('./Database/conn');
const PORT= process.env.PORT;


app.get('/',(req,res)=>{
    res.send("Hello from mongo");
})
app.listen(PORT,()=>{
    console.log(`server is loading at port no ${PORT}`);
})