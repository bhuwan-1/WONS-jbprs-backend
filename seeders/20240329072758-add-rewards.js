'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("rewards", [
      {
        id: "1",
        title: "iPhone",
        cost: 120000,
        status: "Available",
        createdAt: new Date(),
      },
      {
        id: "2",
        title: "Laptop",
        cost: 80000,
        status: "Unavailable",
        createdAt: new Date(),
      },
      {
        id: "3",
        title: "Smartwatch",
        cost: 25000,
        status: "In-Process",
        createdAt: new Date(),
      },
      {
        id: "4",
        title: "Bluetooth Speaker",
        cost: 10000,
        status: "Available",
        createdAt: new Date(),
      },
      {
        id: "5",
        title: "Gift Card",
        cost: 5000,
        status: "Unavailable",
        createdAt: new Date(),
      },
      {
        id: "6",
        title: "Headphones",
        cost: 15000,
        status: "Available",
        createdAt: new Date(),
      },
      {
        id: "7",
        title: "Tablet",
        cost: 35000,
        status: "In-Process",
        createdAt: new Date(),
      },
      {
        id: "8",
        title: "Fitness Tracker",
        cost: 18000,
        status: "Unavailable",
        createdAt: new Date(),
      },
      {
        id: "9",
        title: "Gaming Console",
        cost: 45000,
        status: "Available",
        createdAt: new Date(),
      },
      {
        id: "10",
        title: "Camera",
        cost: 30000,
        status: "Available",
        createdAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("rewards", null, {});
  },
};
