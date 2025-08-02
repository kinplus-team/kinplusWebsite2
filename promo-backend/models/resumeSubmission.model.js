const mongoose = require("mongoose");

const ResumeSubmissionSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    jobRole: { type: String, required: true },
    resumeUrl: { type: String, required: true },
    portfolioLink: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ResumeSubmission", ResumeSubmissionSchema);
