const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please add a first name"],
    },
    lastName: {
      type: String,
      required: [true, "Please add a last name"],
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
    role: {
      type: String,
      enum: ["employee", "dealerAdmin", "orgAdmin"],
      default: "employee", //produer, sales manager, director, accounting, GM
    },
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
    primaryDealer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dealer",
      required: true,
    },
    isActove: Boolean,
  },
  {
    timestamps: true,
  }
);

// add indexes
module.exports = mongoose.model("User", userSchema);
