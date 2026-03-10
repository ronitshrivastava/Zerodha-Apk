const { WatchlistModel } = require("../model/WatchlistModel");
const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");

// GET WATCHLIST
exports.getWatchlist = async (req, res) => {

  const watchlist = await WatchlistModel.find({
    userId: req._userId
  });

  res.json({ status: true, watchlist });

};

// ADD STOCK
exports.addStock = async (req, res) => {

  const { name, price } = req.body;

  const exists = await WatchlistModel.findOne({
    userId: req._userId,
    name
  });

  if (exists) {
    return res.json({
      status: false,
      message: "Stock already exists"
    });
  }

  const stock = await WatchlistModel.create({
    userId: req._userId,
    name,
    price
  });

  res.json({ status: true, stock });

};

// DELETE STOCK
exports.deleteStock = async (req, res) => {
  try {
    const id = req.params.id;

    // Watchlist se delete
    const watch = await WatchlistModel.findOneAndDelete({
      _id: id,
      userId: req._userId
    });

    if (!watch) {
      return res.status(404).json({
        status: false,
        message: "Stock not found in watchlist"
      });
    }

    const stockName = watch.name; // ya symbol jo bhi field ho

    // Holdings se delete
    await HoldingsModel.deleteMany({
      name: stockName,
      userId: req._userId
    });

    // Positions se delete
    await PositionsModel.deleteMany({
      name: stockName,
      userId: req._userId
    });

    // Orders se delete
    await OrdersModel.deleteMany({
      name: stockName,
      userId: req._userId
    });

    res.json({
      status: true,
      message: "Stock removed from Watchlist, Holdings, Positions and Orders"
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Error deleting stock"
    });
  }
};