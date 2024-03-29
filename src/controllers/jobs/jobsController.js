const Job = require("../../models/jobs/model");

const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.findAll();
        res.json(jobs);
    } catch (error) {
        console.error("Error retrieving jobs:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getAllJobTasks = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await Job.findByPk(id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        const tasks = await job.getTasks();
        res.json(tasks);
    } catch (error) {
        console.error("Error retrieving tasks:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { getAllJobs, getAllJobTasks }