'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      {
        schema: "public",
        tableName: "cities_brazil",
        timestamps: false,
        freezeTableName: true,
      },
      {
        guuid: {
          type: Sequelize.UUID,
          primaryKey: true,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
        },
        geom: {
          type: Sequelize.GEOMETRY("point", 4326),
          allowNull: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      }
    );
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('cities_brazil', {
      schema: 'public'
    })
  }
};