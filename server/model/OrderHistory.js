const mongoose = require("mongoose");
require("dotenv").config();
const orderHistorySchema = new mongoose.Schema({
  order: [ {
    type:mongoose.Types.ObjectId,
    ref:"Order" 
}],
  user:
    {
        type:mongoose.Types.ObjectId,
        ref:"User" ,
        required:true 
    }
  ,
  amount:{
    type: Number,
    required: true,
  }
});
module.exports = mongoose.model("OrderHistory", orderHistorySchema);
