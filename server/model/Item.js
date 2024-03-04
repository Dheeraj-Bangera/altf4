const mongoose = require("mongoose");
require("dotenv").config();
const itemSchema = new mongoose.Schema({
  item_no:{
    type: Number,
    required: true,
  },
  item_name: {
    type: String,
    required: true,
},
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
});
module.exports = mongoose.model("Item", itemSchema);
