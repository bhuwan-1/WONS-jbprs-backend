const Reward = require("../../models/rewards/model");

const getAllRewards = async (req, res) => {
    try {
        const rewards = await Reward.findAll();
        res.json(rewards);
    } catch (error) {
        console.error("Error retrieving rewards:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

module.exports = { getAllRewards }