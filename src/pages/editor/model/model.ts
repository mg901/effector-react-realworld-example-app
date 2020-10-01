import { createEvent, createEffect, createStore } from 'effector';
import { createGate } from 'effector-react';
import * as api from 'api';
import { Article } from 'features/types';
import { createFormEvents } from 'library/form';
import * as router from 'library/router';
import * as types from './types';

export const {
  fieldChanged,
  handleFieldChanged,
  formSubmitted,
} = createFormEvents();
export const tagDeleted = createEvent<string>();

export const createArticleFx = createEffect({
  handler: (form: types.Form) =>
    api
      .post<{ article: Article }>('/articles', { article: form })
      .then((x) => x.article),
});

export const fetchArticleFx = createEffect((slug: string) =>
  api.get<{ article: Article }>(`/articles/${slug}`).then(({ article: a }) => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    body: a.body,
    tagList: a.tagList,
  })),
);

export const PageGate = createGate();

export const $slug = router.model.$pathname.map((x) =>
  x?.replace(/\/editor(\/)?/, ''),
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
export const $errors = createStore<Errors>({
  errors: [],
});
