const mongoose = require("mongoose");

const organizationSchema = mongoose.Schema({
  name: String,
  required: [true, "Please name your organization."],
  createdAt: Date,
  activeStatus: Boolean,
  _id: ObjectId,
});

module.exports = mongoose.model("Organization", organizationSchema);
