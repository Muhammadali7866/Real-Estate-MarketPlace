"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Employee.belongsToMany(models.Property, {
        through: "propertyEmployee",
        foreignKey: "ResponsibleEmployeeId",
      });
      Employee.hasMany(models.Inspection, { foreignKey: "employeeId" });

      // one employee has many contracts
      Employee.hasMany(models.Contract, {
        foreignKey: "responsibleEmployeeId",
      });
    }
  }
  Employee.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
