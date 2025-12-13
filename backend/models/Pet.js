const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  breed: { type: String, required: true },
  location: { type: String, required: true },
  status: {
    type: String,
    enum: ["available", "adopted", "rescued", "urgent"],
    default: "available",
  }
}, { timestamps: true });

module.exports = mongoose.model("Pet", PetSchema);