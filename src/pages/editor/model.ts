import { createEvent, createEffect, createStore, restore } from 'effector';
import { createField } from '../../library';
import { post } from '../../api';
import { Form } from './types';

export const textChanged = createEvent<string>();
export const fieldChanged = createEvent<Record<string, string>>();
export const handleFieldChanged = fieldChanged.prepend(createField);
export const handleTextChanged = textChanged.prepend(
  (e: React.ChangeEvent<HTMLInputElement>) => e.target.value,
);
export const tagAdded = createEvent<string>();
export const tagDeleted = createEvent<string>();

export const fxCreateArticle = createEffect({
  handler: (article: Form) => post('/articles', { article }),
});

export const $currentTag = restore(textChanged, '').reset(tagAdded);

export const $form = createStore<Form>({
  articleSlug: '',
  title: '',
  description: '',
  body: '',
  tagList: [],
});

export const $$tags = $form.map((x) => x.tagList);
