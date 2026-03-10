const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ status: false, message: "No token" });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    req._userId = decoded.id;   // attach user id
    next();                     // go to next route

  } catch (err) {
    return res.status(401).json({ status: false, message: "Invalid token" });
  }
};