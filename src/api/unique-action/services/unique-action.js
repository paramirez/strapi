'use strict';

/**
 * unique-action service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::unique-action.unique-action');
