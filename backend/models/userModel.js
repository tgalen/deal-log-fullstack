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
    status: {
      type: String,
      enum: ["active", "inactive", "pending"],
    },
  },
  {
    timestamps: true,
  }
);

userSchema.index({ email: 1 });
userSchema.index({ userId: 1 });
// userSchema.index({ organizationId: 1 });
// userSchema.index({ role: 1 });
// userSchema.index({ organizationId: 1, role: 1 });

module.exports = mongoose.model("User", userSchema);
