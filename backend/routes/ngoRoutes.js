const express = require("express");
const { createNGO, getNGOs } = require("../controllers/ngoController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/")
  .post(protect, createNGO)
  .get(getNGOs);

module.exports = router;
