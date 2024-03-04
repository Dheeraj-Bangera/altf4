const express = require("express");
const {  sendOtpHandler,
    signupHandler,
    loginHandler,
    userInfoHandler,
    signupVendor,
    loginVendorHandler} =  require("../controller/authHandler")
const authRouter = express.Router();
const {isVendor, isUser} =require("../middleware/auth")

authRouter.post( "/getOtp", sendOtpHandler);
authRouter.post( "/signup", signupHandler);
authRouter.post( "/signupVendor", signupVendor);
authRouter.post("/login", loginHandler)
authRouter.post("/loginVendor", loginVendorHandler)
authRouter.get("/userInfo",isUser,userInfoHandler)
module.exports = authRouter;