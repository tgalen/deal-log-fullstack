const mongoose = require("mongoose");

const dealerSchema = mongoose.Schema(
  {
    dealerName: {
      type: String,
    },
    dealerNumber: {
      type: Number,
    },
    dealerGroup: {
      type: String,
    },
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        isActive: { type: Boolean },
        ref: "User",
      },
      {
        timestamps: true,
      },
    ],
    pendingUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        isActive: { type: Boolean },
        ref: "User",
      },
      {
        timestamps: true,
      },
    ],
    dealerAdmin: [
      {
        type: mongoose.Schema.Types.ObjectId,
        isActive: { type: Boolean },
        ref: "User",
      },
      {
        timestamps: true,
      },
    ],
    deals: [
      {
        dealNumber: { type: Number },
        customerName: { type: String },
        dateOfDelivery: { type: String },
        vin: { type: String },
        flc: { type: String },
        lender: { type: String },
        term: { type: Number },
        newOrUsed: { type: String },
        buyRate: { type: Number },
        sellRate: { type: Number },
        reserve: { type: Number },
        vsc: {
          gross: { type: Number },
          remitted: { type: Boolean },
        },
        gap: { type: Number },
        tireWheel: { type: Number },
        key: { type: Number },
        dent: { type: Number },
        windshield: { type: Number },
        xsWear: { type: Number },
        advancedProtection: { type: Number },
        advancedProtectionPlus: { type: Number },
        multiCoverage: { type: Number },
        totalBackendGross: { type: Number },
        funded: { type: Boolean },
        financeManager: { type: String },
        salesperson: { type: String },
      },
      {
        timestamps: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Dealer", dealerSchema);
