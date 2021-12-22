import { createEvent, createEffect, createStore } from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from 'entities/article';
import * as api from 'shared/api';
import { history } from 'shared/library/router';

export const formSubmitted = createEvent();

export const tagDeleted = createEvent<string>();
export const createArticleFx = createEffect<
  article.types.Article,
  article.types.Article,
  api.types.ApiError<Record<string, unknown>>
>(async (form) => {
  const { data } = await api.post<{ article: article.types.Article }>(
    'articles',
    {
      article: form,
    },
  );

  return data.article;
});

export const getArticleFx = createEffect(async (slug: string) => {
  const { data } = await api.get<{ article: article.types.Article }>(
    `articles/${slug}`,
  );

  return data.article;
});

createArticleFx.doneData.watch(({ slug }) => {
  history.replace(`/article/${slug}`);
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
