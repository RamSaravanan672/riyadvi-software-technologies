
import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
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

    company: {
      type: String,
      trim: true,
      default: "",
      maxlength: 150,
    },

    service: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150,
    },

    budget: {
      type: String,
      trim: true,
      default: "",
      maxlength: 100,
    },

    projectDetails: {
      type: String,
      required: true,
      trim: true,
      maxlength: 3000,
    },

    preferredContact: {
      type: String,
      enum: ["Email", "Phone", "WhatsApp"],
      default: "Email",
    },

    status: {
      type: String,
      enum: ["New", "Contacted", "In Progress", "Completed", "Cancelled"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Consultation = mongoose.model(
  "Consultation",
  consultationSchema
);

export default Consultation;
