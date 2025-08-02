const ServicesContact = require("../models/servicesContact.model");
const nodemailer = require("../lib/nodemailer");

const submitServicesContact = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, companyName, description } = req.body;

    const contact = await ServicesContact.create({
      fullName,
      email,
      phoneNumber,
      companyName,
      description,
    });

    // Email to user
    const userPayload = {
      to: email,
      subject: "Your service enquiry has been received",
      html: `
        <p>Hi ${fullName},</p>
        <p>Thank you for reaching out about our services. We’ve received your message and will get back to you shortly.</p>
        <br/>
        <p>Best regards,<br/>Kinplus Team</p>
      `,
    };

    // Email to admin
    const adminPayload = {
      to: process.env.SERVICE_CAREER_AND_PARTNER,
      subject: "New Service Enquiry Received",
      html: `
        <h3>New Services Contact</h3>
        <ul>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phoneNumber}</li>
          <li><strong>Company:</strong> ${companyName}</li>
          <li><strong>Description:</strong> ${description}</li>
        </ul>
      `,
    };

    await nodemailer.sendMail(userPayload);
    await nodemailer.sendMail(adminPayload);

    return res.status(201).json({ success: true, data: contact });
  } catch (error) {
    console.error("Service contact error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = {
  submitServicesContact,
};
