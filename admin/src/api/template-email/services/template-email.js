'use strict';

/**
 * template-email service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::template-email.template-email');
