import { createEvent, createEffect, createStore, forward } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { history } from 'shared/library/router';
import * as endpoints from './endpoints';

export const formSubmitted = createEvent();

export const tagDeleted = createEvent<string>();
export const createArticleFx = createEffect<
  article.types.Article,
  article.types.Article,
  api.types.ApiError<Record<string, unknown>>
>(endpoints.createArticle);

export const getArticleFx = createEffect(endpoints.getArticle);
export const updateArticleFx = createEffect(endpoints.updateArticle);
export const redirectToArticleIdFx = createEffect(
  ({ slug }: article.types.Article) => {
    history.replace(`/article/${slug}`);
  },
);

forward({
  from: [updateArticleFx.doneData, createArticleFx.doneData],
  to: redirectToArticleIdFx,
});

export const Gate = createGate();
export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on(createArticleFx.failData, (_, error) => error.response?.data)
  .reset(Gate.close);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useCreateArticlePending: () => useStore(createArticleFx.pending),
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
