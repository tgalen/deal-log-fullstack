const asyncHandler = require("express-async-handler");

const Dealer = require("../models/dealerModel");

// GET
const getDealers = asyncHandler((req, res) => {
  res.status(200).json({ message: "Get dealers" });
});

// POST
const createDealer = asyncHandler((req, res) => {
  res.status(200).json({ message: "Dealer created" });
});

// PUT
const updateDealer = asyncHandler((req, res) => {
  res.status(200).json({ message: `Update dealer ${req.params.id}` });
});

// DELETE
const deleteDealer = asyncHandler((req, res) => {
  res.status(200).json({ message: `Delete dealer ${req.params.id}` });
});

module.exports = {
  getDealers,
  createDealer,
  updateDealer,
  deleteDealer,
};
