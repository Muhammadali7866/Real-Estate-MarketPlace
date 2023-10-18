"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ListingStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ListingStatus.hasMany(models.Listing, { foreignKey: "listingStatusId" });
    }
  }
  ListingStatus.init(
    {
      description: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "ListingStatus",
    }
  );
  return ListingStatus;
};
