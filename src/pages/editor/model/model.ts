import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import * as feed from 'features/feed';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const {
  fieldChanged,
  handleFieldChanged,
  formSubmitted,
} = createFormEvents();
export const tagDeleted = createEvent<string>();

export const createArticleFx = createEffect<
  types.Form,
  feed.types.Article,
  types.ErrorType
>({
  handler: (article) =>
    api
      .post<{ article: feed.types.Article }>('/articles', { article })
      .then((x) => x.article),
});

export const fetchArticleFx = createEffect((slug: string) =>
  api
    .get<{ article: feed.types.Article }>(`/articles/${slug}`)
    .then(({ article: a }) => ({
      slug: a.slug,
      title: a.title,
      description: a.description,
      body: a.body,
      tagList: a.tagList,
    })),
);

export const PageGate = createGate<types.GateType>();

export const $slug = PageGate.state.map((x) =>
  x.path?.replace(/\/editor(\/)?/, ''),
);

export const $hasSlug = $slug.map(Boolean);
export const $isEmptySlug = $hasSlug.map((x) => !x);
export const $form = createStore<types.Form>({
  slug: '',
  title: '',
  description: '',
  body: '',
  tagList: [],
});

export const $tags = $form.map((x) => x.tagList);
export const $errors = createStore<types.ErrorType>({
  errors: [],
});
