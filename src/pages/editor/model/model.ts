import { createDomain, sample, forward, guard } from 'effector';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';

import * as errorsList from 'features/error-list';
import * as api from 'shared/api';
import { types } from 'shared/feed';
import { history } from 'shared/library/router';
import { uniq } from 'shared/library/uniq';

import * as addTagModel from '../add-tag/model';
import { Form, GateState } from './types';

export const domain = createDomain('editor-page');
export const formSubmitted = domain.createEvent();

export const tagDeleted = domain.createEvent<string>();
export const createArticleFx = domain.createEffect<
  Form,
  types.Article,
  api.types.ApiError
>((form) => {
  return api
    .post('articles', {
      article: form,
    })
    .then((x) => x.data.article);
});

export const fetchArticleFx = domain.createEffect((slug: string) => {
  return api
    .get<{ article: types.Article }>(`articles/${slug}`)
    .then(({ data: { article: a } }) => ({
      slug: a.slug,
      title: a.title,
      description: a.description,
      body: a.body,
      tagList: a.tagList,
    }));
});

export const Gate = createGate<GateState>();

export const $slug = Gate.state.map((p) => p.slug ?? '');

export const $hasSlug = $slug.map(Boolean);
export const $isEmptySlug = $hasSlug.map((is) => !is);

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

guard({
  source: $slug,
  clock: Gate.open,
  filter: (x) => !x === false,
  target: form.reset,
});

export const $tagList = form.fields.tagList.$value;

guard({
  source: $slug,
  clock: Gate.open,
  filter: Boolean,
  target: fetchArticleFx,
});

// set form data
forward({
  from: fetchArticleFx.doneData,
  to: form.set,
});

// add tag
sample({
  source: form.$values,
  clock: addTagModel.tagAdded,
  fn: ({ tagList, ...state }, tag) => ({
    ...state,
    tagList: uniq<string>([...tagList, tag]),
  }),
  target: form.set,
});

// delete tag
sample({
  source: form.$values,
  clock: tagDeleted,
  fn: ({ tagList, ...state }, tag) => ({
    ...state,
    tagList: tagList.filter((item) => item !== tag),
  }),
  target: form.set,
});

// reset form
forward({
  from: [createArticleFx.done, $isEmptySlug],
  to: form.reset,
});

// submit form
sample({
  source: form.$values,
  clock: form.submit,
  target: createArticleFx,
});

createArticleFx.doneData.watch(({ slug }) => {
  history.replace(`/article/${slug}`);
});

errorsList.model.$errors
  .on(createArticleFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, Gate.close);
