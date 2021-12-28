import * as article from '@/entities/article';
import * as http from '@/shared/http';

export const getArticle = (slug: string) => {
  return http
    .request<{ article: article.types.Article }>({
      url: `articles/${slug}`,
      method: 'get',
    })
    .then((response) => response.article)
    .then(({ createdAt, ...rest }) => ({
      ...rest,
      createdAt: new Date(createdAt).toDateString(),
    }));
};

export const deleteArticle = (slug: string) => {
  return http.request({ url: `articles/${slug}`, method: 'delete' });
};
