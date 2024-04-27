const { pg, DataTypes } = require("../../helpers/sequelize");
const Reward = require("../rewards/model");

const User = pg.define(
  "User",
  {
    cid: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    cid_url: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    photo_url: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.DATE,
    },
    verified: {
      type: DataTypes.BOOLEAN,
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
    tableName: "users",
  }
);

//associations here

User.hasMany(Reward, { foreignKey: 'cid' });

// Model.associations = () => {};

module.exports = User;
