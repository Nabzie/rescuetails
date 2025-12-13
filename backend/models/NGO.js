const mongoose = require("mongoose");

const NGOSchema = new mongoose.Schema({
  name: { type: String, required: true },

  address: { type: String, required: true },

  staffCount: { type: Number, default: 0 },

  documents: [
    {
      type: String, // URLs
    }
  ],

  approved: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model("NGO", NGOSchema);