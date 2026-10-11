import express from "express";
import Contact from "../models/Contact.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      requirement,
      message,
    } = req.body;

    if (!name || !email || !phone || !requirement || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all required fields.",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      phone,
      company,
      requirement,
      message,
    });

    return res.status(201).json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
      data: contact,
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong while submitting your enquiry.",
    });
  }
});

export default router;