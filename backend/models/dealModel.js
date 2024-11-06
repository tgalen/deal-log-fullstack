const { text } = require("express");
const mongoose = require("mongoose");

const dealSchema = mongoose.Schema(
  {
    dealNumber: {
      type: Number,
    },
    date: {
      type: String,
    },
    name: {
      type: String,
    },
    vin: {
      type: String,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = dealSchema;
