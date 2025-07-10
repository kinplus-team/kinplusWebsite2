const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const promoRoutes = require("./routes/promoRoutes");
// import promoRoutes from "./routes/promoRoutes.js";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Promo Code API Route
app.use("/api/promocode", promoRoutes);

console.log("Promo routes mounted at /api/promocode");

app.use((req, res, next) => {
  console.log(`🚫 Route not found: ${req.method} ${req.originalUrl}`);
  next();
});


// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


