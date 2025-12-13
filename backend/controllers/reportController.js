const RescueReport = require("../models/RescueReport");

exports.createReport = async (req, res) => {
  try {
    const report = await RescueReport.create({
      ...req.body,
      reportedBy: req.user._id,
    });
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getReports = async (req, res) => {
  const reports = await RescueReport.find()
    .populate("reportedBy", "name")
    .populate("pet");
  res.json(reports);
};
