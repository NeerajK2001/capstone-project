'use strict';

/**
 * testorder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::testorder.testorder');
