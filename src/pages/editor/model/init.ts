import { sample } from 'effector';
import * as router from 'library/router';
import { uniq } from 'library/uniq';
import { model } from '../add-tag';
import {
  $form,
  $errors,
  fieldChanged,
  tagDeleted,
  formSubmitted,
  createArticleFx,
} from './model';

$form
  .on(fieldChanged, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .on(model.validTagAdded, (state, payload) => ({
    ...state,
    tagList: uniq<string>([...state.tagList, payload]),
  }))
  .on(tagDeleted, (state, payload) => ({
    ...state,
    tagList: state.tagList.filter((tag) => tag !== payload),
  }));

sample({
  source: $form,
  clock: formSubmitted,
  target: createArticleFx,
});

createArticleFx.doneData.watch(({ slug }) => {
  router.model.history.replace(`/article/${slug}`);
});

$errors
  .on(createArticleFx.failData, (_, payload) => payload)
  .reset(fieldChanged);
