const express = require("express");
const itAndSiwesController = require("../controllers/itAndSiwes.controller");

const router = express.Router();

router.post("/apply", itAndSiwesController.submitStudentApplication);

module.exports = router;
