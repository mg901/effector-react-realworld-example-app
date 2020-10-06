import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../api';
import { model } from '../../../app';
import { types } from '../../../features/feed';
import { Form, GateState, Errors } from './types';

export const formSubmitted = model.domain.createEvent<React.FormEvent>();
export const tagDeleted = model.domain.createEvent<string>();
export const createArticleFx = model.domain.createEffect<
  Form,
  types.Article,
  AxiosError
>({
  handler: (form) =>
    request
      .post<{ article: types.Article }>('articles', { article: form })
      .then(({ data }) => data.article),
});

export const fetchArticleFx = model.domain.createEffect((slug: string) =>
  request
    .get<{ article: types.Article }>(`articles/${slug}`)
    .then(({ data: { article: a } }) => ({
      slug: a.slug,
      title: a.title,
      description: a.description,
      body: a.body,
      tagList: a.tagList,
    })),
);

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((x) => x.slug);
export const $hasSlug = $slug.map(Boolean);
export const $isEmptySlug = $hasSlug.map((x) => !x);

export const form = createForm({
  fields: {
    slug: {
      init: '' as types.Article['slug'],
    },
    title: {
      init: '' as types.Article['title'],
    },
    description: {
      init: '' as types.Article['description'],
    },
    body: {
      init: '' as types.Article['body'],
    },
    tagList: {
      init: [] as types.Article['tagList'],
    },
  },
});

export const $tagList = form.fields.tagList.$value;

export const $errors = model.domain.createStore<Errors>({
  errors: {},
});
