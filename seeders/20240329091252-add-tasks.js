'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("tasks", [
      {
        id: "1",
        job_id: "11811001094",
        instructions: "What is your name?",
        type: "text",
        createdAt: new Date(),
      },
      {
        id: "2",
        job_id: "11811001094",
        instructions: "What is your age?",
        type: "number",
        createdAt: new Date(),
      },
      {
        id: "3",
        job_id: "11811001094",
        instructions: "Tell me about your family?",
        type: "textarea",
        createdAt: new Date(),
      },
      {
        id: "4",
        job_id: "21811001095",
        instructions: "What's your favorite meal?",
        type: "text",
        createdAt: new Date(),
      },
      {
        id: "5",
        job_id: "51811001098",
        instructions: "What's the name of your device?",
        type: "text",
        createdAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tasks", null, {});
  },
};
