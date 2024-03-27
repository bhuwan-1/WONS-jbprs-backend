"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("users", [
      {
        cid: "11811001094",
        name: "Bhuwan Sharma",
        verified: true,
        desc: "Software Engineer, jbprs",
        createdAt: new Date(),
      },
      {
        cid: "12345678901",
        name: "Phuntsho Gayden",
        verified: false,
        desc: "Senior Software Engineer, jbprs",
        createdAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
