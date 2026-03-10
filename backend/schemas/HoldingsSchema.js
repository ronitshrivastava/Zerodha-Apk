const {Schema} = require("mongoose");

const HoldingsSchema = new Schema({
     userId: {
    type: Schema.Types.ObjectId,

    ref: "User",
    required: true
  },
  symbol: {          // 👈 ADD THIS
    type: String,
   
  },
    name:String,
    qty:Number,
    avg:Number,
    price:{
        type:Number
    },
    net:String,
    day:String,
})

module.exports = {HoldingsSchema};