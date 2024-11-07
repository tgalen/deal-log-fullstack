const mongoose = require("mongoose");

const dealerSchema = mongoose.Schema({
  dealerName: {
    type: String,
  },
  dealerGroup: {
    type: String,
  },
  users: [
    {
      name: { type: String },
      isActive: { type: Boolean },
    },
  ],
  dealerAdmin: {
    type: String,
  },
  deals: [
    {
      dealNumber: { type: Number },
      customerName: { type: String },
      date: { type: String },
      vin: { type: String },
      flc: { type: String },
      lender: { type: String },
      term: { type: Number },
      newOrUsed: { type: String },
      buyRate: { type: Number },
      sellRate: { type: Number },
      reserve: { type: Number },
      vsc: { type: Number },
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
  ],
});

module.exports = mongoose.model("Dealer", dealerSchema);
