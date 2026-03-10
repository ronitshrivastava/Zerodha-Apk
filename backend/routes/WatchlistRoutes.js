const express = require("express");
const router = express.Router();
const { userVerification } = require("../middlewares/AuthMiddleware");

const {
  getWatchlist,
  addStock,
  deleteStock
} = require("../controllers/WatchlistController");

router.get("/watchlist", userVerification, getWatchlist);
router.post("/watchlist/add", userVerification, addStock);
router.delete("/watchlist/:id", userVerification, deleteStock);

module.exports = router;