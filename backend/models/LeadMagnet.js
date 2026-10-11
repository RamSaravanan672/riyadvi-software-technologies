import mongoose from "mongoose";

const leadMagnetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    company: {
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

    resource: {
      type: String,
      default: "Software Project Planning Guide",
    },
  },
  {
    timestamps: true,
  }
);

const LeadMagnet = mongoose.model("LeadMagnet", leadMagnetSchema);

export default LeadMagnet;