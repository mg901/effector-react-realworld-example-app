import { createEvent, createEffect, createStore } from 'effector';
import * as api from '../../../api';
import { createField } from '../../../library';
import * as types from './types';

export const textChanged = createEvent<string>();
export const fieldChanged = createEvent<Record<string, string>>();

export const handleFieldChanged = fieldChanged.prepend(createField);
export const handleTextChanged = textChanged.prepend(
  (e: React.ChangeEvent<HTMLInputElement>) => e.target.value,
);

export const tagAdded = createEvent<string>();
export const tagDeleted = createEvent<string>();

export const createArticleFx = createEffect((article: types.Form) =>
  api.post('/articles', { article }),
);

export const $currentTag = createStore<string>('');

export const $form = createStore<types.Form>({
  articleSlug: '',
  title: '',
  description: '',
  body: '',
  tagList: [],
});

export const $tags = $form.map((x) => x.tagList);
