"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // many offer related to one status
      Offer.belongsTo(models.OfferStatus, { foreignKey: "offerStatusId" });
      // many offers get from one client
      Offer.belongsTo(models.Client, { foreignKey: "clientId" });

      // many offer related to one property
      Offer.belongsTo(models.Property, { foreignKey: "propertyId" });
    }
  }
  Offer.init(
    {
      clientId: {},
      offerAmount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Offer",
    }
  );
  return Offer;
};
