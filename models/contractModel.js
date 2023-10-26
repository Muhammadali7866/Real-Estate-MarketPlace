"use strict";
const { Model, DATE } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Contract extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // many contracts belongs to one Porperty
      Contract.belongsTo(models.Property, { foreignKey: "propertyId" });

      // many contracts belongs to one listing type
      Contract.belongsTo(models.ListingType, { foreignKey: "listingTypeId" });
      // many contracts belongs to one employee
      Contract.belongsTo(models.Employee, {
        foreignKey: "responsibleEmployeeId",
      });
      // many contracts belongs to one Client
      Contract.belongsTo(models.Client, { foreignKey: "clientId" });
      // Many Contracts belongs one contract status
      Contract.belongsTo(models.contractStatus, {
        foreignKey: "contractStatusId",
      });
    }
  }
  Contract.init(
    {
      contractDocument: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      signedDate: {
        type: DataTypes.DATE,
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
    },
    {
      sequelize,
      modelName: "Contract",
    }
  );
  return Contract;
};
