"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ClientPropertyInterest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ClientPropertyInterest.init(
    {},
    {
      sequelize,
      modelName: "ClientPropertyInterest",
    }
  );
  return ClientPropertyInterest;
};
