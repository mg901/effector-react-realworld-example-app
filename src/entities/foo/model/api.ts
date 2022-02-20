import { api } from '@/shared/api';
import * as types from './types';

export const create = (payload: types.Article) =>
  api.request<types.ArticleResponse>({
    url: '/articles',
    method: 'POST',
    body: {
      article: payload,
    },
  });

export const get = (slug: string) =>
  api
    .request<types.ArticleResponse>({
      url: `/articles/${slug}`,
      method: 'GET',
    })
    .then((response) => response.article)
    .then(({ createdAt, ...rest }) => ({
      ...rest,
      createdAt: new Date(createdAt).toDateString(),
    }));

export const update = (payload: types.Article) =>
  api.request<types.ArticleResponse>({
    url: `/articles/${payload.slug}`,
    method: 'PUT',
    body: {
      article: {
        ...payload,
        slug: undefined,
      },
    },
  });

export const remove = (slug: string) =>
  api.request({
    url: `/articles/${slug}`,
    method: 'DELETE',
  });

export const setFavorite = (slug: string) =>
  api.request<types.ArticleResponse>({
    url: `/articles/${slug}/favorite`,
    method: 'POST',
  });

export const setUnfavorite = (slug: string) =>
  api.request<types.ArticleResponse>({
    url: `/articles/${slug}/favorite`,
    method: 'DELETE',
  });
