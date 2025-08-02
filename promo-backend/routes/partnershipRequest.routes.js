const express = require("express");
const router = express.Router();
const partnerShipRequestController = require("../controllers/partnershipRequest.controller");

router.post("/partnership", partnerShipRequestController.submitPartnershipRequest);

module.exports = router;
