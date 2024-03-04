const express = require("express");

const orderRouter = express.Router();
const {isVendor, isUser} =require("../middleware/auth");
const { getordersByVendor, addorder } = require("../controller/orderHandler");

orderRouter.post( "/placeOrder",isVendor, addorder);
module.exports = orderRouter;