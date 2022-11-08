const express=require("express");
const app=express();
const countryRouter=require("./country/country.router")
const Port= 8000
const cors=require("cors");
const mongoose=require("mongoose");
app.use(cors());
app.use(express.json())
app.use("/country",countryRouter);
app.get("/",(req,res)=>{
    res.send('Welcome to My New World.');
})
app.listen(Port,async ()=>{
   await mongoose.connect("mongodb+srv://vishal:0@cluster0.btlkrzz.mongodb.net/search",()=>{
    console.log("connected");
   })
})