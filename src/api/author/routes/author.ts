/**
 * author router.
 */
import { factories } from '@strapi/strapi';

const { createCoreRouter } = require('@strapi/strapi').factories;

export default factories.createCoreRouter('api::author.author' as never);