"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        cid: "11811001094",
        firstName: "Bhuwan",
        lastName: "Sharma",
        password: "admin",
        points: 200,
        verified: true,
        createdAt: new Date(),
      },
      {
        cid: "12345678901",
        firstName: "Phuntsho",
        lastName: "Gayden",
        password: "admin",
        verified: false,
        createdAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
