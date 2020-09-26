import { createEvent, createEffect, createStore } from 'effector';
import * as api from 'api';
import { createFormEvents } from 'library/form';
import * as types from './types';

export const { fieldChanged, handleFieldChanged } = createFormEvents();
export const tagDeleted = createEvent<string>();
export const formSubmitted = createEvent<
  React.MouseEvent<HTMLButtonElement, MouseEvent>
>();

export const createArticleFx = createEffect<types.Form, void, types.ErrorType>({
  handler: (article) => api.post('/articles', { article }),
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
