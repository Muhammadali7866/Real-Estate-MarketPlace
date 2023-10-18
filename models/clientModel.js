"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // on client can be interested in many properties
      Client.belongsToMany(models.Property, {
        through: "ClientPropertyInterest",
        foreignKey: "clientId",
      });

      // Client can attend many inspection
      Client.belongsToMany(models.Inspection, {
        through: "ClientInspection",
        foreignKey: "clientId",
      });

      // one client can do multiple offer
      Client.hasMany(models.Offer, { foreignKey: "clientId" });

      // on client has many contrats
      Client.hasMany(models.Contract, { foreignKey: "clientId" });
    }
  }
  Client.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      emailAddress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Client",
    }
  );
  return Client;
};
