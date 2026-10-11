
import mongoose from "mongoose";

const jobApplicationSchema = new mongoose.Schema(
  {
    jobSlug: {
      type: String,
      required: true,
      trim: true,
    },

    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      maxlength: 25,
    },

    linkedin: {
      type: String,
      trim: true,
      default: "",
      maxlength: 500,
    },

    portfolio: {
      type: String,
      trim: true,
      default: "",
      maxlength: 500,
    },

    resumeUrl: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1000,
    },

    coverLetter: {
      type: String,
      trim: true,
      default: "",
      maxlength: 3000,
    },

    status: {
      type: String,
      enum: ["New", "Under Review", "Shortlisted", "Rejected", "Hired"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const JobApplication = mongoose.model(
  "JobApplication",
  jobApplicationSchema
);

export default JobApplication;
