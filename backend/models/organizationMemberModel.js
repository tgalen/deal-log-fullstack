const mongoose = require("mongoose");

const organizationMemberSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    organizationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Organization",
      required: true,
    },
    role: {
      type: String,
      enum: ["owner", "admin", "member", "consultant"],
      default: "member",
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "pending", "inactive"],
      default: "pending",
      required: true,
    },
    invitedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    invitedAt: {
      type: Date,
    },
    joinedAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

organizationMemberSchema.index(
  { userId: 1, organizationId: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "Organization Member",
  organizationMemberSchema
);
