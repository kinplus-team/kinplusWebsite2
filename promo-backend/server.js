const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const promoRoutes = require("./routes/promoRoutes");
const trainingEnquiryRoutes = require("./routes/trainingEnquiry.routes");
const itAndSiwesRoutes = require("./routes/itAndSiwes.routes");
const partnerShipRequestRoutes = require("./routes/partnershipRequest.routes");
const resumeSubmission = require("./routes/resumeSubmission.routes");
const servicesContact = require("./routes/servicesContact.routes");

dotenv.config();

const app = express();

const allowedOrigins = ["http://localhost:3000", "https://kinpluswebsite2-cezi.onrender.com"];

app.use(
  cors({
    origin: (origin, callback) => {
      console.log(origin);
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ✅ Handle preflight
// app.options("*", cors());

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// api routes
app.use("/api/promocode", promoRoutes);
app.use("/api/training", trainingEnquiryRoutes);
app.use("/api/it-and-siwes", itAndSiwesRoutes);
app.use("/api/partnership", partnerShipRequestRoutes);
app.use("/api/resume", resumeSubmission);
app.use("/api/services", servicesContact);

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
