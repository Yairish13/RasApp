'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ExamPerSoldier,{
        foreignKey:'examId'
      })
    }
  };
  Exam.init({
    examName:{
      type: DataTypes.STRING,
      field:'exam_name'
    },
  }, {
    sequelize,
    modelName: 'Exam',
    timestamps:false,
  });
  return Exam;
};