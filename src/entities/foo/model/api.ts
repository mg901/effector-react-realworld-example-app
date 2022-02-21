import * as http from '@/shared/http';
import * as types from './types';

export const createArticle = (payload: types.Article) =>
  http.client
    .request<types.ArticleResponse>({
      url: '/articles',
      method: 'POST',
      body: {
        article: payload,
      },
    })
    .then((response) => response.data);

export const getArticle = (slug: string) =>
  http.client
    .request<types.ArticleResponse>({
      url: `/articles/${slug}`,
      method: 'GET',
    })
    .then((response) => response.data.article)
    .then(({ createdAt, ...rest }) => ({
      ...rest,
      createdAt: new Date(createdAt).toDateString(),
    }));

export const updateArticle = (payload: types.Article) =>
  http.client
    .request<types.ArticleResponse>({
      url: `/articles/${payload.slug}`,
      method: 'PUT',
      body: {
        article: {
          ...payload,
          slug: undefined,
        },
      },
    })
    .then((response) => response.data);

export const removeArticle = (slug: string) =>
  http.client
    .request({
      url: `/articles/${slug}`,
      method: 'DELETE',
    })
    .then((response) => response.data);

export const setFavoriteArticle = (slug: string) =>
  http.client
    .request<types.ArticleResponse>({
      url: `/articles/${slug}/favorite`,
      method: 'POST',
    })
    .then((response) => response.data);

export const setUnfavoriteArticle = (slug: string) =>
  http.client
    .request<types.ArticleResponse>({
      url: `/articles/${slug}/favorite`,
      method: 'DELETE',
    })
    .then((response) => response.data);
