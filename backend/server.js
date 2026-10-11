import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";
import healthCheckupRoutes from "./routes/healthCheckupRoutes.js";
import leadMagnetRoutes from "./routes/leadMagnetRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import consultationRoutes from "./routes/consultationRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

/* =========================================
   MIDDLEWARE
========================================= */

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


/* =========================================
   ROOT API
========================================= */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Riyadvi Backend API is running",
  });
});

/* =========================================
   HEALTH CHECK
========================================= */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Riyadvi API is healthy",
  });
});

/* =========================================
   CONTACT API
========================================= */

app.use("/api/contact", contactRoutes);

/* =========================================
   BUSINESS HEALTH CHECKUP API
========================================= */

app.use("/api/health-checkup", healthCheckupRoutes);

/* =========================================
   LEAD MAGNET API
========================================= */

app.use("/api/lead-magnet", leadMagnetRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/consultation", consultationRoutes);

/* =========================================
   START SERVER
========================================= */

const startServer = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing from .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Riyadvi backend running on port ${PORT}`);
      console.log(`Local URL: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:");
    console.error(error.message);

    process.exit(1);
  }
};

startServer();