const registerUser = async (req, res) => {
  res.json({ message: "Register User" });
};

const loginUser = async (req, res) => {
  res.json({ message: "Login user" });
};

const getMe = async (req, res) => {
  res.json({ message: "Get user data" });
};

module.exports = { registerUser, loginUser, getMe };
