const { pg, DataTypes } = require("../../helpers/sequelize");
const Job = require("../jobs/model")

const Task = pg.define(
  "Task",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    instructions: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    job_id: {
        type: DataTypes.STRING,
    },
    submit_url: {
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
    paranoid: false,
    tableName: "tasks",
  }
);

// Task.belongsTo(Job, { foreignKey: 'job_id' });

module.exports = Task;
