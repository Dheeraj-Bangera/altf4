const mongoose = require("mongoose");
require("dotenv").config();
const orderListSchema = new mongoose.Schema({
  all_order: [ {
    type:mongoose.Types.ObjectId,
    ref:"Order" 
}],
vendor:
    {
        type:mongoose.Types.ObjectId,
        ref:"Vendor" ,
        required:true 
    }
  ,
order_left: [ {
    type:mongoose.Types.ObjectId,
    ref:"Order" 
}]
});
module.exports = mongoose.model("OrderList", orderListSchema);
