"use strict";

/**
 * `page-populate-middleware` middleware
 */

import { Strapi } from '@strapi/strapi';

interface PopulateConfig {
  contentSections: {
    populate: {
      picture: {
        fields: string[];
      };
      buttons: {
        populate: boolean;
      };
      feature: {
        populate: {
          fields: string[];
          media: {
            fields: string[];
          };
        };
      };
      testimonials: {
        populate: {
          picture: {
            fields: string[];
          };
        };
      };
      plans: {
        populate: string[];
      };
      submitButton: {
        populate: boolean;
      };
    };
  };
}

const populate: PopulateConfig = {
  contentSections: {
    populate: {
      picture: {
        fields: ["url", "alternativeText", "caption", "width", "height"],
      },
      buttons: {
        populate: true,
      },
      feature: {
        populate: {
          fields: ["title", "description", "showLink", "newTab", "url", "text"],
          media: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      testimonials: {
        populate: {
          picture: {
            fields: ["url", "alternativeText", "caption", "width", "height"],
          },
        },
      },
      plans: {
        populate: ["product_features"],
      },
      submitButton: {
        populate: true,
      },
    },
  },
};

export default ({ strapi }: { strapi: Strapi }) => {
  return async (ctx: any, next: () => Promise<void>) => {
    ctx.query = {
      populate,
      filters: { slug: ctx.query.filters.slug },
      locale: ctx.query.locale,
    };

    console.log("page-populate-middleware.js: ctx.query = ", ctx.query);

    await next();
  };
};
