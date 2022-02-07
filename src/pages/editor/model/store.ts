import {
  createEvent,
  createEffect,
  createStore,
  forward,
  guard,
  sample,
} from 'effector';
import { useStore, createGate } from 'effector-react';

import { history, createParamsStore, ROUTES } from '@/shared/router';
import * as article from '@/entities/foo';

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
  target: article.getFx,
});

export const submitForm = createEvent<article.types.Article>();

sample({
  source: $slug,
  clock: guard(submitForm, { filter: $hasSlug }),
  fn: (slug, fields) => ({ ...fields, slug }),
  target: article.updateFx,
});

forward({
  from: guard(submitForm, { filter: $isEmptySlug }),
  to: article.createFx,
});

export const redirectToArticleIdFx = createEffect((slug: string) => {
  history.replace(`/article/${slug}`);
});

sample({
  clock: [article.createFx.doneData, article.updateFx.doneData],
  fn: (data) => data.article.slug,
  target: redirectToArticleIdFx,
});

export const $error = createStore<Record<string, unknown>>({
  errors: {},
})
  .on(article.createFx.failData, (_, payload) => payload)
  .reset(Gate.close);

export const $hasError = $error.map(
  (error) => Object.keys(Object(error)).length > 0,
);

export const $errors = $error.map((error) =>
  Object.entries(Object(error?.errors)),
);

export const selectors = {
  useHasError: () => useStore($hasError),
  useErrors: () => useStore($errors),
};
