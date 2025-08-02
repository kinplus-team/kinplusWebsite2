const mongoose = require("mongoose");

const TrainingEnquirySchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    religion: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    address: { type: String, required: true },
    learningTrack: { type: String, required: true },
    paymentPackage: { type: String, required: true },
    availability: { type: String, required: true },
    chooseYourCohort: { type: String, required: true },
    promoStatus: { type: String, default: "N/A" },
  },
  { timestamps: true }
);

const TrainingEnquiry = mongoose.model("TrainingEnquiry", TrainingEnquirySchema);

module.exports = TrainingEnquiry;
