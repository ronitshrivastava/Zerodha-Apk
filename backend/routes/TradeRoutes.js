const express = require("express");
const router = express.Router();
const { userVerification } = require("../middlewares/AuthMiddleware");

const {
  getPositions,
  getHoldings,
  placeOrder,
  getOrders,
  deleteOrder,
  getPnl
} = require("../controllers/TradeController");

router.get("/positions", userVerification, getPositions);
router.get("/holdings", userVerification, getHoldings);
router.post("/orders", userVerification, placeOrder);
router.get("/myorders", userVerification, getOrders);
router.delete("/deleteOrder/:id", userVerification, deleteOrder);
router.get("/pnl", userVerification, getPnl);

module.exports = router;