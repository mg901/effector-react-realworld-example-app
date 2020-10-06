import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { request } from '../../../api';
import { model } from '../../../app';
import { Article } from '../../../features/types';
import * as types from './types';

export const formSubmitted = model.domain.createEvent<React.FormEvent>();
export const tagDeleted = model.domain.createEvent<string>();
export const createArticleFx = model.domain.createEffect<
  types.Form,
  Article,
  AxiosError
>({
  handler: (form) =>
    request
      .post<{ article: Article }>('articles', { article: form })
      .then(({ data }) => data.article),
});

export const fetchArticleFx = model.domain.createEffect((slug: string) =>
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

export const Gate = createGate<types.GateState>();

export const $slug = Gate.state.map((x) => x.slug);
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

export const $errors = model.domain.createStore<types.Errors>({
  errors: {},
});
