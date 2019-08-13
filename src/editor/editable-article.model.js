import { createEffect, createStore, combine } from 'effector';
import * as req from '../request';

export const createArticle = createEffect().use((article) =>
  req.post('/articles', { article }),
);

export const updateArticle = createEffect().use((article) =>
  req.put(`/articles/${article.slug}`, article),
);

export const getArticle = createEffect().use((slug) =>
  req.get(`/articles/${slug}`),
);

export const editableArticle = createStore({
  article: {},
  comments: [],
}).on(createArticle.done, (state, { result }) => ({
  ...state,
  ...result,
}));

export const isLoading = combine(
  createArticle.pending,
  updateArticle.pending,
  getArticle.pending,
  (create, update, get) => create || update || get,
);
