import * as article from 'entities/article';
import * as api from 'shared/api';

export const createArticle = async (payload: article.types.Article) => {
  const { data } = await api.post<{
    article: article.types.Article;
  }>('articles', {
    article: payload,
  });

  return data.article;
};

export const getArticle = async (slug: string) => {
  const { data } = await api.get<{ article: article.types.Article }>(
    `articles/${slug}`,
  );

  return data.article;
};

export const updateArticle = async (payload: article.types.Article) => {
  const { data } = await api.put(`/articles/${payload.slug}`, {
    article: { ...payload, slug: undefined },
  });

  return data.article;
};
