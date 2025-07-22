const mongoose = require("mongoose");

const dealerSchema = mongoose.Schema(
  {
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
    name: String,
    dealerNumber: Number,
    status: {
      type: String,
      enum: ["active", "pending", "inactive"],
      default: "pending",
      required: true,
    },
    metaData: {
      address: String,
      phone: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Dealer", dealerSchema);
