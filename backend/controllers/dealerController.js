const asyncHandler = require("express-async-handler");

const Dealer = require("../models/dealerModel");

// GET
const getDealers = asyncHandler(async (req, res) => {
  const dealers = await Dealer.find({
    $or: [
      { users: req.user.id },
      { pendingUsers: req.user.id },
      { dealerAdmin: req.user.id },
    ],
  });

  res.status(200).json(dealers);
});

// POST
const createDealer = asyncHandler(async (req, res) => {
  //   console.log(req.body);
  // Consider adding a check for a dealer with existing name or number

  if (!req.body.dealerName) {
    res.status(400);
    throw new Error("Please add a Dealer Name.");
  }

  if (!req.body.dealerNumber) {
    res.status(400);
    throw new Error("Please add a Dealer Number.");
  }

  const dealer = await Dealer.create({
    dealerName: req.body.dealerName,
    dealerGroup: req.body.dealerGroup,
    dealerNumber: req.body.dealerNumber,
    dealerAdmin: req.user.id,
  });
  res.status(200).json({ dealer });
});

// PUT
// need more controllers for more specific updates
// add or delete user from dealer??
// currently adds a user by ObjectId -- needs more functionality
const updateDealer = asyncHandler(async (req, res) => {
  const updatedDealer = await Dealer.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { users: req.body.selectedUser } },
    { new: true }
  );

  if (!updatedDealer) {
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
