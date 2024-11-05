const express = require("express");
const router = express.Router();
const {
  getDealers,
  createDealer,
  updateDealer,
  deleteDealer,
} = require("../controllers/dealerController");

router.get("/", getDealers);

router.post("/", createDealer);

router.put("/:id", updateDealer);

router.delete("/:id", deleteDealer);

module.exports = router;
