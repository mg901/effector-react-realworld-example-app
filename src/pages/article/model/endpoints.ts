import * as article from 'entities/article';
import * as api from 'shared/api';

export const getArticle = (slug: string) => {
  return api
    .get<{ article: article.types.Article }>(`articles/${slug}`)
    .then((response) => response.data.article)
    .then(({ createdAt, ...rest }) => ({
      ...rest,
      createdAt: new Date(createdAt).toDateString(),
    }));
};

export const deleteArticle = (slug: string) => {
  return api.del<void>(`articles/${slug}`);
};