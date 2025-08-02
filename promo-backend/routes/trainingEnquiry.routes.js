const express = require("express");
const trainingEnquiryController = require("../controllers/trainingEnquiry.controller");

const router = express.Router();

router.post("/enquiry", trainingEnquiryController.submitTrainingEnquiry);

module.exports = router;
