const ItAndSiwes = require("../models/itAndSiwes.model");
const nodemailer = require("../lib/nodemailer");

const submitStudentApplication = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phoneNumber,
      institutionName,
      courseOfStudy,
      duration,
      anyHealthChallenges,
      healthChallengesDescription,
    } = req.body;

    console.log("this is the it and siwes", req.body);

    const application = await ItAndSiwes.create(req.body);

    // Email to user
    const userPayload = {
      to: email,
      subject: "Application Received",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for submitting your application. We’ll get back to you shortly.</p>
        <p>Regards,<br/>Kinplus Team</p>
      `,
    };

    // Email to admin
    const adminPayload = {
      to: process.env.TRAINING_AND_SIWES,
      subject: "New Student Application",
      html: `
        <h3>New Student Application Submitted</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Institution:</strong> ${institutionName}</li>
          <li><strong>Course:</strong> ${courseOfStudy}</li>
          <li><strong>Duration:</strong> ${duration}</li>
          <li><strong>Health Issues:</strong> ${anyHealthChallenges}</li>
          ${
            healthChallengesDescription
              ? `<li><strong>Health Details:</strong> ${healthChallengesDescription}</li>`
              : ""
          }
        </ul>
      `,
    };

    const hrPayload = {
      to: process.env.CAREER_AND_SIWES,
      subject: "New Student Application",
      html: `
        <h3>New Student Application Submitted</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Institution:</strong> ${institutionName}</li>
          <li><strong>Course:</strong> ${courseOfStudy}</li>
          <li><strong>Duration:</strong> ${duration}</li>
          <li><strong>Health Issues:</strong> ${anyHealthChallenges}</li>
          ${
            healthChallengesDescription
              ? `<li><strong>Health Details:</strong> ${healthChallengesDescription}</li>`
              : ""
          }
        </ul>
      `,
    };

    // trainee
    await nodemailer.sendMail(userPayload);

    // admin and hr
    await nodemailer.sendMail(adminPayload);
    await nodemailer.sendMail(hrPayload);

    return res.status(201).json({ success: true, data: application });
  } catch (error) {
    console.error("Application error:", error);
    return res.status(500).json({ success: false, message: "Server Error" });
  }
};

module.exports = { submitStudentApplication };
