const express = require("express");
const { submitResume } = require("../controllers/resumeSubmission.controller");

const router = express.Router();

router.post("/submit", submitResume);

module.exports = router;
