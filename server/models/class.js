
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Class.init({
    plugaId:{
     type: DataTypes.INTEGER,
     field:'pluga_id'
    },
    platoonId:{
      type: DataTypes.INTEGER,
      field:'platoon_id'
    },
    className:{
      type: DataTypes.STRING,
      field:'class_name'
    },
  
  }, {
    sequelize,
    modelName: 'class',
  });
  return Class;
};