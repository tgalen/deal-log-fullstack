const mongoose = require("mongoose");

const dealerSchema = mongoose.Schema({
  dealerName: {
    type: String,
  },
  dealerGroup: {
    type: String,
  },
  users: {
    type: String,
  },
  dealerAdmin: {
    type: String,
  },
});

module.exports = mongoose.model("Dealer", dealerSchema);
