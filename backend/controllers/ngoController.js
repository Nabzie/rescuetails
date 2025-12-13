const NGO = require("../models/NGO");

exports.createNGO = async (req, res) => {
  try {
    const ngo = await NGO.create(req.body);
    res.status(201).json(ngo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getNGOs = async (req, res) => {
  const ngos = await NGO.find();
  res.json(ngos);
};
