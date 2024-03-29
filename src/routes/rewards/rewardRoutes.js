const express = require("express");
const router = express.Router();
const {
  getAllRewards
} = require("../../controllers/rewards/rewardsController.js");

router.get("/", getAllRewards);


module.exports = router;
