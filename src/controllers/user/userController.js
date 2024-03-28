const { Op } = require("sequelize");
const User = require("../../models/users/model");
const bcrypt = require("bcrypt");
const moment = require("moment");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  const { cid } = req.params;
  try {
    const user = await User.findByPk(cid);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error retrieving user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const updateUser = async (req, res) => {
  const { cid } = req.params;
  const {
    firstName,
    middleName,
    lastName,
    password,
    role,
    cid_url,
    phone,
    email,
    verified,
  } = req.body;
  try {
    const user = await User.findByPk(cid);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.set({
      firstName: firstName || user.firstName,
      middleName: middleName || user.middleName,
      lastName: lastName || user.lastName,
      password: password ? await bcrypt.hash(password, 10) : user.password,
      role: role || user.role,
      cid_url: cid_url || user.cid_url,
      phone: phone || user.phone,
      email: email || user.email,
      verified: verified !== undefined ? verified : user.verified,
    });
    await user.save();
    res.status(200).json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  const { cid } = req.params;
  try {
    const user = await User.findByPk(cid);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    await user.destroy();
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const searchUser = async (req, res) => {
  const queryString = req.query.query;
  const isDate = /^\d{2}-\d{2}-\d{4}$/.test(queryString);

  let parsedDate;
  if (isDate) {
    parsedDate = moment(queryString, "DD-MM-YYYY", true).tz("Asia/Thimphu");
  }
  try {
    const users = await User.findAll({
      where: {
        [Op.or]: [
          // we can add more search options here
          { cid: { [Op.iLike]: `%${queryString}%` } },
          { firstName: { [Op.iLike]: `%${queryString}%` } },
          { middleName: { [Op.iLike]: `%${queryString}%` } },
          { lastName: { [Op.iLike]: `%${queryString}%` } },
          { email: { [Op.iLike]: `%${queryString}%` } },
          parsedDate?.isValid() && { dob: parsedDate.toISOString() },
        ].filter(Boolean),
      },
    });
    res.json(users);
  } catch (error) {
    console.error("Error searching users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getAllUsers, getUser, updateUser, deleteUser, searchUser };
