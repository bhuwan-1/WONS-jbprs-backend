const { pg, DataTypes } = require("../../helpers/sequelize");
const Task = require("../tasks/model");

const Job = pg.define(
  "Job",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    points: {
      type: DataTypes.INTEGER,
    },
    jobImage_url: {
      type: DataTypes.STRING,
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
    tableName: "jobs",
  }
);

Job.hasMany(Task, { foreignKey: 'job_id' });

module.exports = Job;
