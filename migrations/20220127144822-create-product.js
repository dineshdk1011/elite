"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },

      shortdescription: {
        type: Sequelize.STRING,
      },
      brand: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.INTEGER,
      },
      featuredimage: {
        type: Sequelize.STRING,
      },
      featuredprice: {
        type: Sequelize.INTEGER,
      },
      tax: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable("Products");
  },
};
