import express from "express";
import HealthCheckup from "../models/HealthCheckup.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      businessType,
      digitalPresence,
      website,
      marketing,
      technology,
      name,
      email,
      phone,
      company,
    } = req.body;

    if (
      !businessType ||
      !digitalPresence ||
      !website ||
      !marketing ||
      !technology ||
      !name ||
      !email ||
      !phone
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    const healthCheckup = await HealthCheckup.create({
      businessType,
      digitalPresence,
      website,
      marketing,
      technology,
      name,
      email,
      phone,
      company,
    });

    return res.status(201).json({
      success: true,
      message: "Business health checkup submitted successfully.",
      data: healthCheckup,
    });
  } catch (error) {
    console.error("Health Checkup API error:", error);

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while submitting your health checkup.",
    });
  }
});

export default router;