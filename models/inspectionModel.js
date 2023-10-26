"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Inspection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Inspection.belongsTo(models.Property, { foreignKey: "propertyId" });
      Inspection.belongsTo(models.Employee, {
        foreignKey: "ResponsibleEmployeeId",
      });

      // Inspecton can have many client
      Inspection.belongsToMany(models.Client, {
        through: "ClientInspection",
        foreignKey: "inspectionId",
      });
    }
  }
  Inspection.init(
    {
      inspectionDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Inspection",
    }
  );
  return Inspection;
};
