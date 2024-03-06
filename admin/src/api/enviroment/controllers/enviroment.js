'use strict';

/**
 * enviroment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::enviroment.enviroment');
