const PartnershipRequest = require("../models/partnershipRequest.model");
const nodemailer = require("../lib/nodemailer");

const submitPartnershipRequest = async (req, res) => {
  try {
    const {
      fullName,
      email,
      amount,
      phoneNumber,
      currentAddress,
      organizationName,
      organizationAddress,
      organizationWebsite,
      partnershipType,
      comment,
    } = req.body;

    const request = await PartnershipRequest.create({
      fullName,
      email,
      amount,
      phoneNumber,
      currentAddress,
      organizationName,
      organizationAddress,
      organizationWebsite,
      partnershipType,
      comment,
    });

    // Email to user
    const userPayload = {
      to: email,
      subject: "Partnership Request Received",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for your interest in partnering with us.</p>
        <p>We'll reach out to you shortly.</p>
        <br/>
        <p>Kinplus Team</p>
      `,
    };

    // Email to admin
    const adminPayload = {
      to: process.env.SERVICE_CAREER_AND_PARTNER,
      subject: "New Partnership Request",
      html: `
        <h3>New Partnership Request</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Amount:</strong> ₦${amount}</li>
          <li><strong>Organization:</strong> ${organizationName}</li>
          <li><strong>Website:</strong> ${organizationWebsite}</li>
          <li><strong>Type:</strong> ${partnershipType}</li>
          <li><strong>Comment:</strong> ${comment}</li>
        </ul>
      `,
    };

    await nodemailer.sendMail(userPayload);
    await nodemailer.sendMail(adminPayload);

    return res.status(201).json({ success: true, data: request });
  } catch (error) {
    console.error("Partnership request error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  submitPartnershipRequest,
};
