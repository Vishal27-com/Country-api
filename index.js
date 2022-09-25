const express=require("express");
const app=express();
const countryRouter=require("./country/country.router")
const Port= process.env.PORT || 8000
const cors=require("cors");
const mongoose=require("mongoose");
app.use(cors());
app.use(express.json())
app.use("/country",countryRouter);
app.get("/",(req,res)=>{
    res.send('Heroku');
})
app.listen(Port,()=>{
   mongoose.connect("mongodb://localhost:27017/search")
})