import { createEffect } from 'effector';
import { useStore } from 'effector-react';
import * as api from './api';
import * as types from './types';

export const createFx = createEffect<
  types.Article,
  types.ArticleResponse,
  Record<string, unknown>
>(api.create);

export const getFx = createEffect(api.get);
export const updateFx = createEffect(api.update);
export const removeFx = createEffect(api.remove);

export const selectors = {
  useCreateArticleLoading: () => useStore(getFx.pending),
  useGetArticleLoading: () => useStore(getFx.pending),
  useUpdateArticleLoading: () => useStore(updateFx.pending),
};
