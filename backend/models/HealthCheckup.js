import mongoose from "mongoose";

const healthCheckupSchema = new mongoose.Schema(
  {
    businessType: {
      type: String,
      required: true,
      trim: true,
    },

    digitalPresence: {
      type: String,
      required: true,
      trim: true,
    },

    website: {
      type: String,
      required: true,
      trim: true,
    },

    marketing: {
      type: String,
      required: true,
      trim: true,
    },

    technology: {
      type: String,
      required: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const HealthCheckup = mongoose.model(
  "HealthCheckup",
  healthCheckupSchema
);

export default HealthCheckup;