const mongoose = require("mongoose");

const itAndSiwesSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    religion: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    gender: { type: String, required: true, enum: ["Male", "Female", "Other"] },
    address: { type: String, required: true },
    institutionName: { type: String, required: true },
    courseOfStudy: { type: String, required: true },
    duration: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    anyHealthChallenges: { type: String, required: true },
    healthChallengesDescription: { type: String },
  },
  { timestamps: true }
);

const ItAndSiwes = mongoose.model("ItAndSiwes", itAndSiwesSchema);

module.exports = ItAndSiwes;
