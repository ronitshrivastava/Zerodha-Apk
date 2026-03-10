const { HoldingsModel } = require("../model/HoldingsModel");
const { PositionsModel } = require("../model/PositionsModel");
const { OrdersModel } = require("../model/OrdersModel");
const User = require("../model/UserModel");

// GET POSITIONS
exports.getPositions = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({
      userId: req._userId
    });

    res.json(holdings);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// GET HOLDINGS
exports.getHoldings = async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({
      userId: req._userId
    });

    res.json(holdings);

  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// PLACE ORDER
exports.placeOrder = async (req, res) => {
  try {

    let { name, qty, price, mode } = req.body;

    qty = Number(qty);
    price = Number(price);

    const user = await User.findById(req._userId);
    if (!user) { return res.status(404).json({ message: "User not found" }); }

    const total = qty * price;

    // BUY
    if (mode === "BUY") {

      if (user.balance < total) {
        return res.json({  
    message: "Insufficient balance" });
      }

      user.balance -= total;
      await user.save();

      let holding = await HoldingsModel.findOne({
        userId: req._userId,
        name
      });

      if (holding) {

        const totalQty = holding.qty + qty;

        const newAvg =
          (holding.qty * holding.avg + qty * price) / totalQty;

        holding.qty = totalQty;
        holding.avg = Number(newAvg.toFixed(2));
        holding.price = price;

        await holding.save();

      } else {

        await HoldingsModel.create({
          userId: req._userId,
          name,
          qty,
          price,
          avg: price
        });

      }
    }

    // SELL
    if (mode === "SELL") {

      const holding = await HoldingsModel.findOne({
        userId: req._userId,
        name
      });

      if (!holding) {
        return res.json({ message: "You don't own this stock" });
      };

      if (holding.qty < qty) { return res.status(400).json({ message: "Not enough quantity to sell", }); }

      const realised = (price - holding.avg) * qty;

      user.realisedPnl =
        (user.realisedPnl || 0) + realised;

      user.balance += total;

      await user.save();

      holding.qty -= qty;

      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ _id: holding._id });
      } else {
        await holding.save();
      }
    }

    await OrdersModel.create({
      userId: req._userId,
      name,
      qty,
      price,
      mode
    });

    res.json({ status: true });

  } catch (err) {
    res.status(500).json({ status: false });
  }
};

// GET ORDERS
exports.getOrders = async (req, res) => {

  const orders = await OrdersModel
    .find({ userId: req._userId })
    .sort({ createdAt: -1 });

  res.json({ status: true, orders });
};

// DELETE ORDER
exports.deleteOrder = async (req, res) => {

  const orderId = req.params.id;

  await OrdersModel.deleteOne({
    _id: orderId,
    userId: req._userId
  });

  res.json({
    status: true,
    message: "Order deleted"
  });
};

// PNL
exports.getPnl = async (req, res) => {

  const user = await User.findById(req._userId);

  const holdings = await HoldingsModel.find({
    userId: req._userId
  });

  let unrealised = 0;

  holdings.forEach((stock) => {

    unrealised +=
      (stock.price - stock.avg) * stock.qty;

  });

  res.json({

    realised: user.realisedPnl,
    unrealised,
    total: user.realisedPnl + unrealised

  });
};