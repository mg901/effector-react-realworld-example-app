import { createEvent, createEffect, createStore, restore } from 'effector';
import { createField, uniq } from '../../library';
import * as api from '../../api';
import * as types from './types';

export const textChanged = createEvent<string>();
export const fieldChanged = createEvent<Record<string, string>>();

export const handleFieldChanged = fieldChanged.prepend(createField);
export const handleTextChanged = textChanged.prepend(
  (e: React.ChangeEvent<HTMLInputElement>) => e.target.value,
);

export const tagAdded = createEvent<string>();
export const tagDeleted = createEvent<string>();

export const createArticleFx = createEffect({
  handler: (article: types.Form) => api.post('/articles', { article }),
});

export const $currentTag = restore(textChanged, '').reset(tagAdded);

export const $form = createStore<types.Form>({
  articleSlug: '',
  title: '',
  description: '',
  body: '',
  tagList: [],
})
  .on(fieldChanged, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .on(tagAdded.filter({ fn: (x) => Boolean(x.length) }), (state, payload) => ({
    ...state,
    tagList: uniq<string>([...state.tagList, payload]),
  }))
  .on(tagDeleted, (state, payload) => ({
    ...state,
    tagList: state.tagList.filter((tag) => tag !== payload),
  }));

export const $$tags = $form.map((x) => x.tagList);
