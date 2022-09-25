const express=require("express");
const app=express.Router();
const Country=require("./country.model");
app.get("/",async (req,res)=>{
    let {query}=req.query;
    let result=await Country.find({country:{$regex:query}});
    res.send(result);
});
module.exports=app;