const Pet = require("../models/Pet");

// @route POST /api/pets
exports.createPet = async (req, res) => {
  try {
    const pet = await Pet.create({
      ...req.body,
      addedBy: req.user._id,
    });
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @route GET /api/pets
exports.getPets = async (req, res) => {
  const pets = await Pet.find().populate("addedBy", "name");
  res.json(pets);
};
