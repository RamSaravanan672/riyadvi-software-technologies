
import express from "express";
import mongoose from "mongoose";
import Consultation from "../models/Consultation.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      company,
      service,
      budget,
      projectDetails,
      preferredContact,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !service ||
      !projectDetails
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required fields.",
      });
    }

    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof service !== "string" ||
      typeof projectDetails !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid consultation details.",
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    const allowedContactMethods = ["Email", "Phone", "WhatsApp"];
    const contactMethod = preferredContact || "Email";

    if (!allowedContactMethods.includes(contactMethod)) {
      return res.status(400).json({
        success: false,
        message: "Please select a valid contact method.",
      });
    }

    const consultation = await Consultation.create({
      fullName: fullName.trim(),
      email: cleanEmail,
      phone: phone.trim(),
      company: typeof company === "string" ? company.trim() : "",
      service: service.trim(),
      budget: typeof budget === "string" ? budget.trim() : "",
      projectDetails: projectDetails.trim(),
      preferredContact: contactMethod,
    });

    return res.status(201).json({
      success: true,
      message: "Your consultation request has been submitted successfully.",
      consultationId: consultation._id,
    });
  } catch (error) {
    console.error("Consultation submission failed:", error.message);

    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({
        success: false,
        message: "Please check your details and try again.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to submit your request right now. Please try again later.",
    });
  }
});

export default router;
