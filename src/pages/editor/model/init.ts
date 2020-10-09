import { sample, guard, attach, forward } from 'effector';
import {
  form,
  Gate,
  $errors,
  $slug,
  $hasSlug,
  $isEmptySlug,
  formSubmitted,
  tagDeleted,
  createArticleFx,
  fetchArticleFx,
} from '.';
import * as router from '../../../library/router';
import { uniq } from '../../../library/uniq';
import * as addTagModel from '../add-tag/model';

formSubmitted.watch((e) => e.preventDefault());

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
  clock: addTagModel.validTagAdded,
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

$errors
  .on(createArticleFx.failData, (_, error) => error.response?.data)
  .reset(form.$values, Gate.close);
