"use strict";
const { Model } = require("sequelize");
const uuid = require("uuid");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      userid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      phone: DataTypes.BIGINT,
      directrefferal: DataTypes.STRING,
      refferal: DataTypes.STRING,
      wallet: DataTypes.STRING,
      totalbalance: DataTypes.STRING,
      profile: DataTypes.STRING,
     
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
