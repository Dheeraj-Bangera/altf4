const mongoose = require("mongoose");
require("dotenv").config();
const orderSchema = new mongoose.Schema({
  order_no:{
    type: Number,
    required: true,
  },
  item_name: [ {
    type:mongoose.Types.ObjectId,
    ref:"Item" ,
    required:true 
}],
  user:
    {
        type:mongoose.Types.ObjectId,
        ref:"User" ,
        required:true 
    }
  ,
  vendor:
  {
      type:mongoose.Types.ObjectId,
      ref:"Vendor",
      required:true  
  },
  amount:{
    type: Number,
    required: true,
  }
,
isComplete:{
  type:Boolean,
  required:true
},
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Order", orderSchema);
