"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class propertyEmployee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // realtion between the propertyEmployee and roleTYpe
      propertyEmployee.belongsTo(models.roleType, { foreignKey: "roleTypeId" });
    }
  }
  propertyEmployee.init(
    {
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "propertyEmployee",
    }
  );
  return propertyEmployee;
};
