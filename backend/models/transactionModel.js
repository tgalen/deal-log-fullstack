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

transactionSchema.index({ date: -1 });
transactionSchema.index({ userId: 1, date: -1 });
transactionSchema.index({ dealerId: 1, date: -1 });
transactionSchema.index({ organizationId: 1, date: -1 });
transactionSchema.index({ "items.productType": 1, date: -1 });
transactionSchema.index({ "items.productName": 1, date: -1 });
transactionSchema.index({ transactionId: 1 });

// Updated compound indexes
transactionSchema.index({ organizationId: 1, locationId: 1, date: -1 });
transactionSchema.index({ userId: 1, dealerIdId: 1, date: -1 });

module.exports = mongoose.model("Transaction", transactionSchema);
