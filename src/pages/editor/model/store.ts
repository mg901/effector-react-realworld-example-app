import {
  createEvent,
  createEffect,
  restore,
  forward,
  guard,
  sample,
} from 'effector';
import { useStore, createGate } from 'effector-react';
import * as article from '@/entities/article';
import { history, createParamsStore, ROUTES } from '@/shared/router';
import * as api from './api';

export const formSubmitted = createEvent<article.types.Article>();
export const tagDeleted = createEvent<string>();
export const createArticleFx = createEffect<
  article.types.Article,
  article.types.Article,
  Record<string, unknown>
>(api.createArticle);

export const getArticleFx = createEffect(api.getArticle);
export const updateArticleFx = createEffect(api.updateArticle);

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

export const $slug = createParamsStore<{ slug: string }>({
  path: ROUTES.editor.slug,
}).map((params) => params.slug ?? '');

const $hasSlug = $slug.map(Boolean);
const $isEmptySlug = $slug.map((slug) => slug.length === 0);

guard({
  source: $slug,
  filter: Boolean,
  clock: Gate.open,
  target: getArticleFx,
});

sample({
  source: $slug,
  clock: guard(formSubmitted, { filter: $hasSlug }),
  fn: (slug, fields) => ({ ...fields, slug }),
  target: updateArticleFx,
});

sample({
  clock: guard(formSubmitted, { filter: $isEmptySlug }),
  target: createArticleFx,
});

export const $error = restore(createArticleFx.failData, {
  errors: {},
}).reset(Gate.close);

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
