const mongoose= require("mongoose")

const bitCoinSchema= new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    symbol:{
        type: String,
        unique: true
    },
    marketCapUsd: String,  
     priceUsd: String

},{timestamps:true})
module.exports= mongoose.model("bitcoin", bitCoinSchema)