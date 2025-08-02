const express = require("express");
const servicesContact = require("../controllers/servicesContact.controller");

const router = express.Router();

router.post("/contact", servicesContact.submitServicesContact);

module.exports = router;
