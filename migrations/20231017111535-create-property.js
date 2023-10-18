"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Properties", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      address1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      city: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      areaInSquareFeet: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      numBedrooms: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numBathrooms: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numCarspaces: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contact: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false, //[Note:"Either for sale price or rent price"]
      },
      areaInSquareFeet: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      propertyImages: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      propertyTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "PropertyTypes",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      listingTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ListingTypes",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Properties");
  },
};
