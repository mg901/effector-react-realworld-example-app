import {
  createEvent,
  createEffect,
  createStore,
  sample,
  guard,
  attach,
  forward,
} from 'effector-root';
import { createForm } from 'effector-forms';
import { createGate } from 'effector-react';
import { AxiosError } from 'axios';
import { api } from 'api';
import * as router from 'library/router';
import { uniq } from 'library/uniq';
import { types } from 'shared-modules/feed';
import * as addTagModel from '../add-tag/model';
import { Form, GateState, Errors } from './types';

export const formSubmitted = createEvent<React.FormEvent>();
formSubmitted.watch((e) => e.preventDefault());

export const tagDeleted = createEvent<string>();
export const createArticleFx = createEffect<Form, types.Article, AxiosError>(
  (form) =>
    api
      .post('articles', {
        article: form,
      })
      .then(({ data }) => data.article),
);

export const fetchArticleFx = createEffect((slug: string) =>
  api
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

export const $slug = Gate.state.map((p) => p.slug);
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

export const $tagList = form.fields.tagList.$value;

guard({
  source: Gate.open,
  filter: $hasSlug,
  target: attach({
    source: $slug,
    effect: fetchArticleFx,
  }),
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
  router.model.history.replace(`/article/${slug}`);
});

export const $errors = createStore<Errors>({
  errors: {},
})
  .on(createArticleFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, Gate.close);
