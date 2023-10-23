"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Property.belongsTo(models.PropertyType, { foreignKey: "propertyTypeId" });
      Property.belongsTo(models.ListingType, { foreignKey: "listingTypeId" });
      Property.belongsToMany(models.Feature, {
        through: "PropertyFeature",
        foreignKey: "propertyId",
      });
      Property.hasMany(models.Listing, { foreignKey: "propertyId" });
      Property.belongsToMany(models.Employee, {
        through: "propertyEmployee",
        foreignKey: "propertyId",
      });
      Property.hasMany(models.Inspection, { foreignKey: "propertyId" });

      // Property can be interrested in more than one client
      Property.belongsToMany(models.Client, {
        through: "ClientPropertyInterest",
        foreignKey: "propertyId",
      });

      // property can get many offer
      Property.hasMany(models.Offer, { foreignKey: "propertyId" });

      // property has many contracts
      Property.hasMany(models.Contract, { foreignKey: "propertyId" });
    }
  }
  Property.init(
    {
      address1: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numBedrooms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numBathrooms: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      numCarspaces: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false, //[Note:"Either for sale price or rent price"]
      },
      areaInSquareFeet: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      propertyImages: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Property",
    }
  );
  return Property;
};
