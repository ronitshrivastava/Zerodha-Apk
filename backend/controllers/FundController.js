const User = require("../model/UserModel");

// CURRENT USER
exports.getCurrentUser = async (req, res) => {

  const user = await User
    .findById(req._userId)
    .select("-password");

  res.json({ status: true, user });

};

// ADD FUNDS
exports.addFunds = async (req, res) => {

  const { amount } = req.body;

  const user = await User.findById(req._userId);

  user.balance += Number(amount);

  await user.save();

  res.json({
    status: true,
    balance: user.balance
  });
};

// WITHDRAW FUNDS
exports.withdrawFunds = async (req, res) => {

  const { amount } = req.body;

  const user = await User.findById(req._userId);

  if (user.balance < amount) {
    return res.json({
      status: false,
      message: "Insufficient balance"
    });
  }

  user.balance -= Number(amount);

  await user.save();

  res.json({
    status: true,
    balance: user.balance
  });

};