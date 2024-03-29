const { pg, DataTypes } = require("../../helpers/sequelize");

const Reward = pg.define(
  "Reward",
  {

    // id: "1",
    //     title: "iPhone",
    //     cost: 120000,
    //     status: "Available",
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    cost: {
        type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.STRING,
    },
    rewardImage_url: {
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },
  },
  {
    paranoid: true,
    tableName: "rewards",
  }
);

module.exports = Reward;
