const ResumeSubmission = require("../models/resumeSubmission.model");
const nodemailer = require("../lib/nodemailer");

const submitResume = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, jobRole, resumeUrl, portfolioLink } = req.body;

    const submission = await ResumeSubmission.create({
      fullName,
      email,
      phoneNumber,
      jobRole,
      resumeUrl,
      portfolioLink,
    });

    // Email to user
    const userPayload = {
      to: email,
      subject: "Resume Received",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for applying for the <strong>${jobRole}</strong> role.</p>
        <p>We have received your resume and will review it shortly.</p>
        <br/>
        <p>Best regards,<br/>Kinplus Hiring Team</p>
      `,
    };

    // Email to admin
    const adminPayload = {
      to: process.env.SERVICE_CAREER_AND_PARTNER,
      subject: `New Resume Submission - ${jobRole}`,
      html: `
        <h3>New Resume Submission</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Job Role:</strong> ${jobRole}</li>
          <li><strong>Resume:</strong> <a href="${resumeUrl}" target="_blank">View Resume</a></li>
          <li><strong>Portfolio:</strong> <a href="${portfolioLink}" target="_blank">${portfolioLink}</a></li>
        </ul>
      `,
    };

    const hrPayload = {
      to: process.env.CAREER_AND_SIWES,
      subject: `New Resume Submission - ${jobRole}`,
      html: `
        <h3>New Resume Submission</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Job Role:</strong> ${jobRole}</li>
          <li><strong>Resume:</strong> <a href="${resumeUrl}" target="_blank">View Resume</a></li>
          <li><strong>Portfolio:</strong> <a href="${portfolioLink}" target="_blank">${portfolioLink}</a></li>
        </ul>
      `,
    };

    await nodemailer.sendMail(userPayload);

    // admin and hr
    await nodemailer.sendMail(adminPayload);
    await nodemailer.sendMail(hrPayload);

    return res.status(201).json({ success: true, data: submission });
  } catch (error) {
    console.error("Resume submission error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  submitResume,
};
