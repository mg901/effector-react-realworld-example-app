import * as article from 'entities/article';
import * as http from 'shared/http';

export const getArticle = (slug: string) => {
  return http
    .get<{ article: article.types.Article }>(`articles/${slug}`)
    .then((response) => response.data.article)
    .then(({ createdAt, ...rest }) => ({
      ...rest,
      createdAt: new Date(createdAt).toDateString(),
    }));
};

export const deleteArticle = (slug: string) => {
  return http.del<void>(`articles/${slug}`);
};
