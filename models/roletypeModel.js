"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class roleType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      roleType.hasMany(models.propertyEmployee, { foreignKey: "roleTypeId" });
    }
  }
  roleType.init(
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "roleType",
    }
  );
  return roleType;
};
