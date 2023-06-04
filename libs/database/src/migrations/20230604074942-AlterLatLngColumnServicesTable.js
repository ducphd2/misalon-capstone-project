'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('services', 'latitude', {
      type: Sequelize.DataTypes.FLOAT,
    });
    await queryInterface.addColumn('services', 'longitude', {
      type: Sequelize.DataTypes.FLOAT,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('services', 'latitude');
    await queryInterface.removeColumn('services', 'longitude');
  },
};
