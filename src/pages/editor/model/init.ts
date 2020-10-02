import { sample, guard, attach } from 'effector';
import * as router from 'library/router';
import { uniq } from 'library/uniq';
import { model } from '../add-tag';
import {
  PageGate,
  $form,
  $errors,
  $slug,
  $hasSlug,
  $isEmptySlug,
  fieldChanged,
  tagDeleted,
  formSubmitted,
  createArticleFx,
  fetchArticleFx,
} from './model';

guard({
  source: PageGate.open,
  filter: $hasSlug,
  target: attach({
    source: $slug,
    effect: fetchArticleFx,
  }),
});

$form
  .on(fetchArticleFx.doneData, (_, payload) => payload)
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
  }))
  .reset(createArticleFx.done, $isEmptySlug);

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
  .reset(fieldChanged, PageGate.close);
