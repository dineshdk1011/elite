"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      product: {
        type: Sequelize.INTEGER,
      },
      swatch: {
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      paymentmode: {
        type: Sequelize.STRING,
      },
      shippingaddress: {
        type: Sequelize.STRING,
      },
      trackingid: {
        type: Sequelize.STRING,
        defaultValue: null,
      },
      amount: {
        type: Sequelize.INTEGER,
      },
      userid: {
        type: Sequelize.INTEGER,
      },
      orderid: {
        type: Sequelize.STRING,
      },
      paymentid: {
        type: Sequelize.STRING,
      },
      signature: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
