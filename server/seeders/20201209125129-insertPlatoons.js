"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Platoons",
      [
        {
          id: 1,
          pluga_id:1,
          platoon_name: "א",
        },
        {
          id: 2,
          pluga_id: 1,
          platoon_name: "ב",
        },
        {
          id: 3,
          pluga_id: 1,
          platoon_name: "ג",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Platoons', null, {});
  },
};