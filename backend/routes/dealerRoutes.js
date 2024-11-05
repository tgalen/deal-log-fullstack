const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Get dealers" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Create dealers" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update dealer ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `Delete dealer ${req.params.id}` });
});

module.exports = router;
