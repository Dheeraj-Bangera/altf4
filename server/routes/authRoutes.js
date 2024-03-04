const express = require("express");
const {  sendOtpHandler,
    signupHandler,
    loginHandler,
    userInfoHandler} =  require("../controller/authHandler")
const authRouter = express.Router();
const {auth, isUser} =require("../middleware/auth")

authRouter.post( "/getOtp", sendOtpHandler);
authRouter.post( "/signup", signupHandler);
authRouter.post("/login", loginHandler)
authRouter.get("/userInfo",isUser,userInfoHandler)
module.exports = authRouter;