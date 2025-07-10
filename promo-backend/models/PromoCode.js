const mongoose = require("mongoose");

const promoCodeSchema = new mongoose.Schema({
  code: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
  discountDay1: { type: Number, required: true }, // discount when the user uses discount the exact day e.g., 0.4 = 40%
  discountDay2: { type: Number, required: true }, // discount when the user uses discount the second day e.g., 0.2 = 20%
  discountAfter: { type: Number, required: true }, // discount when the user uses discount the following days e.g., 0.1 = 10%
  expiresInDays: { type: Number, default: 7 }, // promo code expires after seven days
});

module.exports = mongoose.model("PromoCode", promoCodeSchema);
