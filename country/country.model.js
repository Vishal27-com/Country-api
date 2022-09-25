const mongoose=require("mongoose");
const countrySchema=new mongoose.Schema({
    country:{type:String},
    city:{type:String}
})
const country=mongoose.model("country",countrySchema);
module.exports=country;