import * as article from '@/entities/article';
import * as http from '@/shared/http';

export const createArticle = (payload: article.types.Article) => {
  return http
    .request<{
      article: article.types.Article;
    }>({
      url: 'articles',
      method: 'post',
      data: {
        article: payload,
      },
    })
    .then((response) => response.article);
};

export const getArticle = (slug: string) => {
  return http
    .request<{ article: article.types.Article }>({
      url: `articles/${slug}`,
      method: 'get',
    })
    .then((response) => response.article);
};

export const updateArticle = (payload: article.types.Article) => {
  return http
    .request<{ article: article.types.Article }>({
      url: `/articles/${payload.slug}`,
      method: 'put',
      data: {
        article: { ...payload, slug: undefined },
      },
    })
    .then((response) => response.article);
};
