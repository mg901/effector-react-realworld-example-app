import * as article from 'entities/article';
import * as api from 'shared/api';

export const createArticle = (payload: article.types.Article) => {
  return api
    .post<{
      article: article.types.Article;
    }>('articles', {
      article: payload,
    })
    .then((response) => response.data.article);
};

export const getArticle = (slug: string) => {
  return api
    .get<{ article: article.types.Article }>(`articles/${slug}`)
    .then((response) => response.data.article);
};

export const updateArticle = (payload: article.types.Article) => {
  return api
    .put(`/articles/${payload.slug}`, {
      article: { ...payload, slug: undefined },
    })
    .then((response) => response.data.article);
};
