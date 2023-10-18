"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class contractStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // one contract status has many contract
      contractStatus.hasMany(models.Contract, {
        foreignKey: "contractStatusId",
      });
    }
  }
  contractStatus.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "contractStatus",
    }
  );
  return contractStatus;
};
