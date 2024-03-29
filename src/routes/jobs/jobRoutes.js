const express = require("express");
const router = express.Router();
const {
  getAllJobs,
  getAllJobTasks,
} = require("../../controllers/jobs/jobsController.js");

router.get("/", getAllJobs);
router.get("/:id/tasks", getAllJobTasks);

module.exports = router;
