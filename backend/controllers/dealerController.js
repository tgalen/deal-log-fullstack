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
  res.status(200).json({ message: `Update dealer ${req.params.id}` });
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
