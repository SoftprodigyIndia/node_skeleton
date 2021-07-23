'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('shops',
    {
      id: {
          type: Sequelize.INTEGER(20),
          unique: true,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          unsigned: true
      },
      shop_name: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: false
      },
      shop_url: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: true
      },
      access_token: {
          type: Sequelize.STRING(255),
          unique: true,
          allowNull: true
      }
    },
    {
      engine: 'InnoDB',    // default: 'InnoDB'
      schema: '',    // default: public, PostgreSQL only.
      comment: 'shops table', // comment for table
      collate: 'utf8_bin' // collation, MYSQL only
    }
    );

  },

  down: (queryInterface, Sequelize) => {}
};
