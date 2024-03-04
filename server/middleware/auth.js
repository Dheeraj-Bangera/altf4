const User = require("../model/User");
const jwt = require("jsonwebtoken");
require("dotenv").config;

const isUser = async (req, res, next) => {
    try {
      const cookie = req.cookies.token;
      if (!cookie) {
        res.status(401).json({ message: "unathorized", success: false });
      } else {
        const verify = jwt.verify(cookie, process.env.JWT_SECRET_KEY);
        if (!verify || verify.role !== "user") {
          return res.json({ message: "unathorized", success: false }).status(401);
        }
        req.body.userData = verify;
        next();
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  
  const isVendor = async (req, res, next) => {
    try {
      const cookie = req.cookies.token;
      if (!cookie) {
        res.status(401).json({ message: "unathorized", success: false });
      } else {
        const verify = jwt.verify(cookie, process.env.JWT_SECRET_KEY);
        if (!verify || verify.role !== "vendor") {
          return res.json({ message: "unathorized", success: false }).status(401);
        }
        req.body.userData = verify;
        next();
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  module.exports= {
    isUser,isVendor
  }