"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Feature.belongsToMany(models.Property, {
        through: "PropertyFeature",
        foreignKey: "featureId",
      });
    }
  }
  Feature.init(
    {
      featureName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Feature",
    }
  );
  return Feature;
};
