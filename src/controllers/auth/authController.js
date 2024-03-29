const { createSession, destroySession } = require("../../helpers/session");
const User = require("../../models/users/model");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { cid, password } = req.body;
  try {
    const cidPattern = /^\d{11}$/;
    if (!cidPattern.test(cid)) {
      return res.status(400).json({ message: "CID must be a 11-digit number" });
    }
    // Check if the CID is already in use
    const existingUser = await User.findOne({ where: { cid } });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the saltRounds
    // Create a new user record in the database
    const newUser = await User.create({
      cid,
      password: hashedPassword,
    });

    // Return a success response
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  const { cid, password } = req.body;
  try {
    const user = await User.findOne({ where: { cid } });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    createSession(req, user);

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error logging in:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    destroySession(req, res);
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error logging out:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { register, login, logout };
