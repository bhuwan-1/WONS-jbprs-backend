'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("jobs", [
      {
        id: "11811001094",
        title: "Hospital",
        description: "Survey for hospital",
        points: 10,
        createdAt: new Date(),
      },
      {
        id: "21811001095",
        title: "Restaurant",
        description: "Customer feedback for a restaurant",
        points: 8,
        createdAt: new Date(),
      },
      {
        id: "31811001096",
        title: "Supermarket",
        description: "Product placement survey for a supermarket",
        points: 12,
        createdAt: new Date(),
      },
      {
        id: "41811001097",
        title: "Coffee Shop",
        description: "Taste testing new coffee flavors",
        points: 6,
        createdAt: new Date(),
      },
      {
        id: "51811001098",
        title: "Tech Store",
        description: "User experience survey for a tech store",
        points: 15,
        createdAt: new Date(),
      },
      {
        id: "61811001099",
        title: "Gym",
        description: "Survey for gym facilities",
        points: 7,
        createdAt: new Date(),
      },
      {
        id: "71811001100",
        title: "Park",
        description: "Environmental survey for a public park",
        points: 9,
        createdAt: new Date(),
      },
      {
        id: "81811001101",
        title: "Bookstore",
        description: "Book preference survey for a bookstore",
        points: 10,
        createdAt: new Date(),
      },
      {
        id: "91811001102",
        title: "Fashion Boutique",
        description: "Feedback on new clothing designs",
        points: 8,
        createdAt: new Date(),
      },
      {
        id: "101811001103",
        title: "Cinema",
        description: "Moviegoer satisfaction survey for a cinema",
        points: 11,
        createdAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("jobs", null, {});
  },
};
