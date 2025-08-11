const mongoose = require("mongoose");

const PartnershipRequestSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    currentAddress: { type: String, required: true },
    organizationName: { type: String },
    organizationAddress: { type: String },
    organizationWebsite: { type: String },
    partnershipType: { type: String, required: true },
    comment: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PartnershipRequest", PartnershipRequestSchema);
