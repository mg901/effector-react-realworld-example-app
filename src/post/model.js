import { createEffect } from 'effector';
import { get, post, put, del } from '../request';
import { limit } from '../helpers';

export const deletePost = createEffect().use((slug) =>
  del(`/articles/${slug}`),
);

export const updatePost = createEffect().use((article) =>
  put(`/articles/${article.slug}`, {
    article: { ...article, slug: undefined },
  }),
);

export const createPost = createEffect().use((article) =>
  post('/articles', { article }),
);

export const setFavoritePost = createEffect().use((slug) =>
  post(`/articles/${slug}/favorite`),
);

export const setUnfavoritePost = createEffect().use((slug) =>
  del(`/articles/${slug}/favorite`),
);

export const fetchPostsByAuthor = createEffect().use((author, page) =>
  get(`/articles?author=${encodeURIComponent(author)}&${limit(5, page)}`),
);
