'use strict';

/**
 * operative service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::operative.operative');
