"use strict";
const { UUIDV4 } = require('sequelize/types');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      {
        schema: "public",
        tableName: "cities_brazil",
      },
      [
        
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete({
      schema: "public",
      tableName: "cities_brazil",
    });
  },
};
