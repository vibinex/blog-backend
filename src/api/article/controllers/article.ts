import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
  async incrementView(ctx: any) {
    const { id } = ctx.params;

    const article: any = await strapi.db.query('api::article.article').findOne({
      where: { id },
      select: ['id', 'viewCount'],
    });

    if (!article) {
      return ctx.notFound('Article not found');
    }

    const currentCount = article.viewCount || 0;

    await strapi.db.query('api::article.article').update({
      where: { id },
      data: { viewCount: currentCount + 1 },
    });

    return ctx.send({ viewCount: currentCount + 1 });
  },
}));
