"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Orders.init(
    {
      product: DataTypes.INTEGER,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      swatch: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      paymentmode: DataTypes.STRING,
      shippingaddress: DataTypes.STRING,
      trackingid: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      userid: DataTypes.UUID,
      orderid: DataTypes.STRING,
      paymentid: DataTypes.STRING,
      signature: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
