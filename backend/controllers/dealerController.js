// GET
const getDealers = (req, res) => {
  res.status(200).json({ message: "Get dealers" });
};

// POST
const createDealer = (req, res) => {
  res.status(200).json({ message: "Dealer created" });
};

// PUT
const updateDealer = (req, res) => {
  res.status(200).json({ message: `Update dealer ${req.params.id}` });
};

// DELETE
const deleteDealer = (req, res) => {
  res.status(200).json({ message: `Delete dealer ${req.params.id}` });
};

module.exports = {
  getDealers,
  createDealer,
  updateDealer,
  deleteDealer,
};
