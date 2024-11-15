const express = require("express");
const router = express.Router();
const {
  getDealers,
  createDealer,
  updateDealer,
  deleteDealer,
} = require("../controllers/dealerController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getDealers).post(protect, createDealer);
router.route("/:id").put(protect, updateDealer).delete(protect, deleteDealer);

module.exports = router;
