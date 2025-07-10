const PromoCode = require("../models/PromoCode");

exports.validatePromoCode = async (req, res) => {
  console.log("🎯 validatePromoCode hit");

  const { code } = req.body;

  try {
    // Find promo code in database
    const promo = await PromoCode.findOne({ code });

    if (!promo) {
      return res.status(404).json({
        valid: false,
        message: "Invalid promo code",
      });
    }

    const now = new Date();
    const daysSinceCreation = Math.floor(
      (now - new Date(promo.createdAt)) / (1000 * 60 * 60 * 24)
    );

    if (daysSinceCreation >= promo.expiresInDays) {
      return res.status(400).json({
        valid: false,
        message: "Promo code has expired",
      });
    }

    // Determine current applicable discount
    let discount = 0;
    if (daysSinceCreation === 0) {
      discount = promo.discountDay1;
    } else if (daysSinceCreation === 1) {
      discount = promo.discountDay2;
    } else {
      discount = promo.discountAfter;
    }

    // Return full promo data plus calculated discount
    return res.json({
      valid: true,
      code: promo.code,
      createdAt: promo.createdAt,
      discountDay1: promo.discountDay1,
      discountDay2: promo.discountDay2,
      discountAfter: promo.discountAfter,
      expiresInDays: promo.expiresInDays,
      daysSinceCreation,
      discount,
    });
  } catch (err) {
    console.error("Error validating promo code:", err);
    return res.status(500).json({
      valid: false,
      message: "Server error while validating promo code",
    });
  }
};
