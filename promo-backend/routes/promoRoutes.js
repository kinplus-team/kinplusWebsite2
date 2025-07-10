const express = require("express");
const router = express.Router();
const { validatePromoCode } = require("../controllers/promoController");

// Test route
router.get("/test", (req, res) => {
  console.log("✅ test route hit");
  res.send("Promo route is working");
});

// Validate promo code
router.post("/validate", validatePromoCode);

module.exports = router;
