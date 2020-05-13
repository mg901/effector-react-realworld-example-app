import { createStore, restore, sample } from 'effector';
import {
  fieldChanged,
  textChanged,
  tagAdded,
  addedNonEmptyTag,
  articleCreated,
  tagRemoved,
} from './events';
import { fxCreateArticle } from './effects';
import { uniq } from '../../library';
import { Form, Tags } from './types';
import { ErrorList } from '../types';

export const $form = createStore<Form>({
  title: '',
  description: '',
  body: '',
});

export const $currentTag = restore<string>(textChanged, '').reset(tagAdded);
export const $tags = createStore<Tags>([]);
export const $errors = createStore<ErrorList>({});

$form.on(fieldChanged, (state, payload) => ({
  ...state,
  ...payload,
}));

$tags
  .on(addedNonEmptyTag, (state, payload) => uniq([...state, payload]))
  .on(tagRemoved, (state, payload) => state.filter((tag) => tag !== payload));

sample({
  source: {
    form: $form,
    tagList: $tags,
  },
  clock: articleCreated,
  fn: ({ form, tagList }) => ({ ...form, tagList }),
  target: fxCreateArticle,
});

$errors.on(fxCreateArticle.fail, (_, { error: { errors } }) => errors);

// export const $form = createStore<Editor>({
//   articleSlug: '',
//   title: '',
//   description: '',
//   body: '',
// });

// export const $currentTag = restore<string>(textChanged, '').reset(tagAdded);

// export const $tags = createStore<Tags>({ list: new Set() });

// $tags.on(
//   tagAdded.filter({
//     fn: (x) => x.length > 0,
//   }),
//   (state, payload) => ({
//     list: state.list.add(payload),
//   }),
// );

// sample({
//   source: combine({
//     form: $form,
//     tags: $tags,
//   }),
//   clock: formSubmitted,
//   fn: ({ form, tags }) => ({
//     ...form,
//     tagList: Array.from(tags.list),
//   }),
// });
