// import { history } from 'library/router';
import { uniq } from 'library/uniq';
import { model } from '../add-tag-form';
import {
  $form,
  $errors,
  fieldChanged,
  tagDeleted,
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

// createArticleFx.done.watch(({ params }) => {
//   history.replace(`/article/${params.slug}`)
// });

$errors
  .on(createArticleFx.failData, (_, payload) => payload)
  .reset(fieldChanged);
