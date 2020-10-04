import { createEvent, createEffect, createStore } from 'effector';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from 'api';
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

export const createArticleFx = createEffect<types.Form, Article, AxiosError>({
  handler: (form) =>
    request
      .post<{ article: Article }>('articles', { article: form })
      .then(({ data }) => data.article),
});

export const fetchArticleFx = createEffect((slug: string) =>
  request
    .get<{ article: Article }>(`articles/${slug}`)
    .then(({ data: { article: a } }) => ({
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

export const form = createForm({
  fields: {
    slug: {
      init: '' as Article['slug'],
    },
    title: {
      init: '' as Article['title'],
    },
    description: {
      init: '' as Article['description'],
    },
    body: {
      init: '' as Article['body'],
    },
    tagList: {
      init: [] as Article['tagList'],
    },
  },
});

export const $tagList = form.fields.tagList.$value;

export const $errors = createStore<types.Errors>({
  errors: {},
});
