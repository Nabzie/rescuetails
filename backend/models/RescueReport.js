const mongoose = require("mongoose");

const RescueReportSchema = new mongoose.Schema({
  reporter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  location: { type: String, required: true },

  description: { type: String, required: true },

  images: [
    {
      type: String, // image URLs
    }
  ],

  urgency: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
  },

  assignedNGO: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "NGO"
  }
}, { timestamps: true });

module.exports = mongoose.model("RescueReport", RescueReportSchema);