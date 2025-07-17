const mongoose = require("mongoose");

const organizationSchema = mongoose.Schema(
  {
    name: String,
    required: [true, "Please name your organization."],
    createdAt: Date,
    isActive: Boolean,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Organization", organizationSchema);
