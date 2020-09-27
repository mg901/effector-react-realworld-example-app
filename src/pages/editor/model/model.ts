import { createEvent, createEffect, createStore } from 'effector';
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
      .post<types.CreateArticleFxDone>('/articles', { article })
      .then((x) => x.article),
});

export const $form = createStore<types.Form>({
  articleSlug: '',
  title: '',
  description: '',
  body: '',
  tagList: [],
});

export const $tags = $form.map((x) => x.tagList);
export const $errors = createStore<types.ErrorType>({
  errors: [],
});
