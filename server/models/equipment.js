"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Equipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.EquipmentPerUser, {
        foreignKey: "equipmentId",
      });    }
  }
  Equipment.init(
    {
      equipmentName: {
        type: DataTypes.STRING,
        field: "equipment_name",
      },
    },
    {
      sequelize,
      modelName: "Equipment",
      timestamps: false,
    }
  );
  return Equipment;
};
