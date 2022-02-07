import * as http from '@/shared/http';
import * as types from './types';

export const create = (payload: types.Article) =>
  http.request<types.ArticleResponse>({
    url: 'articles',
    method: 'post',
    data: {
      article: payload,
    },
  });

export const get = (slug: string) =>
  http
    .request<types.ArticleResponse>({
      url: `articles/${slug}`,
      method: 'get',
    })
    .then((response) => response.article)
    .then(({ createdAt, ...rest }) => ({
      ...rest,
      createdAt: new Date(createdAt).toDateString(),
    }));

export const update = (payload: types.Article) =>
  http.request<types.ArticleResponse>({
    url: `articles/${payload.slug}`,
    method: 'put',
    data: {
      article: {
        ...payload,
        slug: undefined,
      },
    },
  });

export const remove = (slug: string) =>
  http.request({
    url: `articles/${slug}`,
    method: 'delete',
  });

export const setFavorite = (slug: string) =>
  http.request<types.ArticleResponse>({
    url: `articles/${slug}/favorite`,
    method: 'post',
  });

export const setUnfavorite = (slug: string) =>
  http.request<types.ArticleResponse>({
    url: `articles/${slug}/favorite`,
    method: 'delete',
  });
