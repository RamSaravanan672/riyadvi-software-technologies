
import express from "express";
import mongoose from "mongoose";
import JobApplication from "../models/JobApplication.js";

const router = express.Router();

const isValidOptionalUrl = (value) => {
  if (!value) return true;

  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

router.post("/", async (req, res) => {
  try {
    const {
      jobSlug,
      jobTitle,
      fullName,
      email,
      phone,
      linkedin,
      portfolio,
      resumeUrl,
      coverLetter,
    } = req.body;

    if (
      !jobSlug ||
      !jobTitle ||
      !fullName ||
      !email ||
      !phone ||
      !resumeUrl
    ) {
      return res.status(400).json({
        success: false,
        message: "Please complete all required application fields.",
      });
    }

    if (
      typeof fullName !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string" ||
      typeof jobSlug !== "string" ||
      typeof jobTitle !== "string" ||
      typeof resumeUrl !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid application data.",
      });
    }

    const cleanEmail = email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!isValidOptionalUrl(resumeUrl.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid resume URL starting with http or https.",
      });
    }

    if (!isValidOptionalUrl(linkedin) || !isValidOptionalUrl(portfolio)) {
      return res.status(400).json({
        success: false,
        message: "LinkedIn and portfolio links must be valid HTTP or HTTPS URLs.",
      });
    }

    const application = await JobApplication.create({
      jobSlug: jobSlug.trim(),
      jobTitle: jobTitle.trim(),
      fullName: fullName.trim(),
      email: cleanEmail,
      phone: phone.trim(),
      linkedin: typeof linkedin === "string" ? linkedin.trim() : "",
      portfolio: typeof portfolio === "string" ? portfolio.trim() : "",
      resumeUrl: resumeUrl.trim(),
      coverLetter:
        typeof coverLetter === "string" ? coverLetter.trim() : "",
    });

    return res.status(201).json({
      success: true,
      message: "Your application has been submitted successfully.",
      applicationId: application._id,
    });
  } catch (error) {
    console.error("Job application submission failed:", error.message);

    if (error instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({
        success: false,
        message: "Please check your application details and try again.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unable to submit your application right now. Please try again later.",
    });
  }
});

export default router;
