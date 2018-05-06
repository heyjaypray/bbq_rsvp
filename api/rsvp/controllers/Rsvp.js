'use strict';

/**
 * Rsvp.js controller
 *
 * @description: A set of functions called "actions" for managing `Rsvp`.
 */

module.exports = {

  /**
   * Retrieve rsvp records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    return strapi.services.rsvp.fetchAll(ctx.query);
  },

  /**
   * Retrieve a rsvp record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.rsvp.fetch(ctx.params);
  },

  /**
   * Create a/an rsvp record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.rsvp.add(ctx.request.body);
  },

  /**
   * Update a/an rsvp record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.rsvp.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an rsvp record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.rsvp.remove(ctx.params);
  }
};
