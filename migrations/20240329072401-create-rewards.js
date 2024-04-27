'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("rewards", {
      id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      title: {
        type: Sequelize.STRING,
      },
      cost: {
        type: Sequelize.FLOAT,
      },
      status: {
        type: Sequelize.STRING,
      },
      rewardImage_url: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: true,
        references: {
          model: "users",
          key: "cid",
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.dropTable("rewards");

  }
};
