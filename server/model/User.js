const mongoose = require("mongoose");
require("dotenv").config();
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mobile_no: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  batch:{
    type:Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});
module.exports = mongoose.model("User", userSchema);
