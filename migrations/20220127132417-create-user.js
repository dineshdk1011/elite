"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      directrefferal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      refferal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      totalbalance: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      wallet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profile: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("Users");
  },
};
