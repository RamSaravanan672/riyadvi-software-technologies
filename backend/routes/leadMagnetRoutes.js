import express from "express";
import LeadMagnet from "../models/LeadMagnet.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      company,
      email,
      phone,
    } = req.body;

    if (!name || !company || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    const lead = await LeadMagnet.create({
      name,
      company,
      email,
      phone,
    });

    return res.status(201).json({
      success: true,
      message: "Planning guide request submitted successfully.",
      data: lead,
    });
  } catch (error) {
    console.error("Lead Magnet API error:", error);

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while processing your request.",
    });
  }
});

export default router;