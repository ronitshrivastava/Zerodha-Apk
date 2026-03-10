const mongoose = require("mongoose");

const WatchlistSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    price: { type: Number, default: 0 },
    percent: { type: Number, default: 0 },
    isDown: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const WatchlistModel = mongoose.model("Watchlist", WatchlistSchema);

module.exports = { WatchlistModel };