const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dealerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dealer",
    required: true,
  },
  organizationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organization",
    required: true,
  },
  date: { type: Date, required: true },
});

module.exports = mongoose.model("Transaction", transactionSchema);
