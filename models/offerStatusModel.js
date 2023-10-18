"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OfferStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // 1) One offer related to many offer
      OfferStatus.hasMany(models.Offer, { foreignKey: "offerStatusId" });
    }
  }
  OfferStatus.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "OfferStatus",
    }
  );
  return OfferStatus;
};
