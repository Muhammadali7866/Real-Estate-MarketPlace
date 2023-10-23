"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.changeColumn("listings", "creatingDate", {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.changeColumn("Listings", "creatingDate", {
      type: Sequelize.DATE,
      defaultValue: null, // Adjust this as needed
    });
  },
};
