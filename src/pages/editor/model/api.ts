import * as article from 'entities/article';
import * as http from 'shared/http';

export const createArticle = (payload: article.types.Article) => {
  return http
    .post<{
      article: article.types.Article;
    }>('articles', {
      article: payload,
    })
    .then((response) => response.data.article);
};

export const getArticle = (slug: string) => {
  return http
    .get<{ article: article.types.Article }>(`articles/${slug}`)
    .then((response) => response.data.article);
};

export const updateArticle = (payload: article.types.Article) => {
  return http
    .put(`/articles/${payload.slug}`, {
      article: { ...payload, slug: undefined },
    })
    .then((response) => response.data.article);
};
