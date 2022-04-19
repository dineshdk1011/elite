'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Swatches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Swatches.init({
    type: DataTypes.STRING,
    variant: DataTypes.STRING,
    saleprice: DataTypes.INTEGER,
    maxprice: DataTypes.INTEGER,
    product: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Swatches',
  });
  return Swatches;
};