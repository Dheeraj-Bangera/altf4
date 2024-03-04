const express = require("express");

const itemRouter = express.Router();
const {isVendor, isUser} =require("../middleware/auth");
const { getItemsByVendor, addItem } = require("../controller/itemHandler");

itemRouter.post( "/postItem",isVendor, addItem);

itemRouter.get("/getItem",isUser,getItemsByVendor)
module.exports = itemRouter;