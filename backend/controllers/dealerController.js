const asyncHandler = require("express-async-handler");

const Dealer = require("../models/dealerModel");

// GET
const getDealers = asyncHandler(async (req, res) => {
  const dealers = await Dealer.find({ users: req.user.id });

  res.status(200).json(dealers);
});

// POST
const createDealer = asyncHandler(async (req, res) => {
  //   console.log(req.body);

  if (!req.body.dealerName) {
    res.status(400);
    throw new Error("Please add a text field.");
  }

  const dealer = await Dealer.create({
    dealerName: req.body.dealerName,
    dealerAdmin: req.user.id,
  });
  res.status(200).json({ dealer });
});

// PUT
// need more controllers for more specific updates
// add or delete user from dealer??
const updateDealer = asyncHandler(async (req, res) => {
  const dealer = await Dealer.findById(req.params.id);

  if (!dealer) {
    res.status(400);
    throw new Error("Dealer not found");
  }

  //   const updatedDealer = Dealer.findByIdAndUpdate(req.params.id, req.body, {
  //     new: true,
  //   });

  res.status(200).json({ message: "Dealer Updated" });
});

// DELETE
const deleteDealer = asyncHandler(async (req, res) => {
  const dealer = await Dealer.findById(req.params.id);
  console.log(dealer);
  if (!dealer) {
    res.status(400);
    throw new Error("Dealer not found");
  }

  await dealer.deleteOne();

  res.status(200).json({ message: `Deleted dealer ${req.params.id}` });
});

module.exports = {
  getDealers,
  createDealer,
  updateDealer,
  deleteDealer,
};
