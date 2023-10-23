"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Properties", "contact", {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Properties", "contact", {
      type: Sequelize.INTEGER, // Original data type
      allowNull: false, // Original allowNull setting
    });
  },
};
