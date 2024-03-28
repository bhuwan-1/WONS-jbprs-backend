const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  searchUser,
} = require("../../controllers/user/userController.js");

router.get("/", getAllUsers);
router.get("/search", searchUser);
router.get("/:cid", getUser);
router.put("/:cid", updateUser);
router.delete("/:cid", deleteUser);

module.exports = router;
