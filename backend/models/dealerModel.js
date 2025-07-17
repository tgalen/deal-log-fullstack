const mongoose = require("mongoose");

const dealerSchema = mongoose.Schema(
  {
    organization: ObjectId,
    name: String,
    dealerNumber: Number,
    isActive: Boolean,
    metaData: {
      address: String,
      phone: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dealer", dealerSchema);
