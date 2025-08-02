const TrainingEnquiry = require("../models/trainingEnquiry.model");
const nodemailer = require("../lib/nodemailer");

const submitTrainingEnquiry = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, learningTrack, paymentPackage, chooseYourCohort } =
      req.body;

    const enquiry = await TrainingEnquiry.create(req.body);

    const userPayload = {
      to: email,
      subject: "Training Enquiry Received",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for your interest in our training program.</p>
        <p>We'll reach out to you shortly.</p>
        <br/>
        <p>Kinplus Team</p>
      `,
    };

    // Email to admin
    const adminPayload = {
      to: process.env.TRAINING_AND_SIWES,
      subject: "New Training Enquiry",
      html: `
        <h3>New Training Enquiry Submitted</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Track:</strong> ${learningTrack}</li>
          <li><strong>Package:</strong> ${paymentPackage}</li>
          <li><strong>Cohort:</strong> ${chooseYourCohort}</li>
        </ul>
      `,
    };

    await nodemailer.sendMail(userPayload);
    await nodemailer.sendMail(adminPayload);

    return res.status(201).json({ success: true, data: enquiry });
  } catch (error) {
    console.error("Training enquiry error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { submitTrainingEnquiry };
