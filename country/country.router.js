const express=require("express");
const app=express.Router();
const Country=require("./country.model");
app.get("/",async (req,res)=>{
    let result=await Country.find({});
    res.send(result);
});
module.exports=app;