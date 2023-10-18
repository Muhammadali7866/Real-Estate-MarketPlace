"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ListingType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ListingType.hasMany(models.Property, { foreignKey: "listingTypeId" });
      ListingType.hasMany(models.Listing, { foreignKey: "listingTypeId" });

      // one listing type has many contract
      ListingType.hasMany(models.Contract, { foreignKey: "listingTypeId" });
    }
  }
  ListingType.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "ListingType",
    }
  );
  return ListingType;
};
