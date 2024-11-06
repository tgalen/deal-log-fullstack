const express = require("express");
const router = express.Router();
const {
  getDealers,
  createDealer,
  updateDealer,
  deleteDealer,
} = require("../controllers/dealerController");

router.route("/").get(getDealers).post(createDealer);
router.route("/:id").put(updateDealer).delete(deleteDealer);

module.exports = router;
