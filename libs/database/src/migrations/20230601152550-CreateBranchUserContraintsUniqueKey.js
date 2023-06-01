'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('branch_users', 'merchant_id', {
      type: Sequelize.DataTypes.INTEGER,
    });

    await queryInterface.addIndex('branch_users', ['user_id', 'merchant_id'], {
      unique: true,
      name: 'customer_index_key',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeIndex('branch_users', 'customer_index_key');
  },
};
