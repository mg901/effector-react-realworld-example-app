import { createEvent, createEffect, createStore } from 'effector';
import * as api from './api';
import * as types from './types';

export const createArticleFx = createEffect<
  types.Article,
  types.ArticleResponse,
  types.ArticleError
>(api.createArticle);

export const getArticleFx = createEffect(api.getArticle);
export const updateArticleFx = createEffect(api.updateArticle);
export const removeArticleFx = createEffect(api.removeArticle);

export const resetError = createEvent();
export const $error = createStore<types.FailData | null>(null)
  .on(createArticleFx.failData, (_, error) => error.data)
  .reset(resetError);

export const $errorList = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);
