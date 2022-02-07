import * as http from '@/shared/http';
import * as types from './types';

export const createArticle = (payload: types.Article) => {
  return http.request<types.ArticleResponse>({
    url: 'articles',
    method: 'post',
    data: {
      article: payload,
    },
  });
};

export const getArticle = (slug: string) => {
  return http.request<types.ArticleResponse>({
    url: `articles/${slug}`,
    method: 'get',
  });
};

export const updateArticle = (payload: types.Article) => {
  return http.request<types.ArticleResponse>({
    url: `/articles/${payload.slug}`,
    method: 'put',
    data: {
      article: { ...payload, slug: undefined },
    },
  });
};
