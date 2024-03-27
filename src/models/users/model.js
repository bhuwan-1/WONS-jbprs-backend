const {pg, DataTypes} = require('../../helpers/sequelize')

const User = pg.define('User', {
  cid: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
  },
  photo_url: {
    type: DataTypes.STRING
  },
  desc: {
    type: DataTypes.STRING
  },
  dob: {
    type: DataTypes.DATE
  },
  verified: {
    type: DataTypes.BOOLEAN
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE
  }
}, {
  paranoid: true,
  tableName: 'users'
});


//associations here

// Model.associations = () => {};

module.exports = User