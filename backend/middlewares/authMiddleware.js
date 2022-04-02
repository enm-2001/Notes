const jwt = require("jsonwebtoken");
const User =require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

//to protect our api from unauthorized users, user has to pass through this middleware to reach to the api
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer") //we are sending Bearer token from our frontend
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; //removing Bearer and taking just token

      //decodes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };