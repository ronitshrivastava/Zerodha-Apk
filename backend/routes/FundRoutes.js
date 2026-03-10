const express = require("express");
const router = express.Router();
const { userVerification } = require("../middlewares/AuthMiddleware");

const {
  addFunds,
  withdrawFunds,
  getCurrentUser
} = require("../controllers/FundController");

router.post("/add", userVerification, addFunds);
router.post("/withdraw", userVerification, withdrawFunds);
router.get("/user", userVerification, getCurrentUser);

module.exports = router;