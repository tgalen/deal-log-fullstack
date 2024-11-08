const asyncHandler = require("express-async-handler");

const Dealer = require("../models/dealerModel");

// GET
const getDealers = asyncHandler(async (req, res) => {
  const dealers = await Dealer.find();

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
  });
  res.status(200).json({ dealer });
});

// PUT
const updateDealer = asyncHandler(async (req, res) => {
  const dealer = await Dealer.findById(req.params.id);

  if (!dealer) {
    res.status(400);
    throw new Error("Dealer not found");
  }

  const updatedDealer = Dealer.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedDealer);
});

// DELETE
const deleteDealer = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete dealer ${req.params.id}` });
});

module.exports = {
  getDealers,
  createDealer,
  updateDealer,
  deleteDealer,
};
