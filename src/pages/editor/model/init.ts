import { isASCII } from 'library/ascii';
import { uniq } from 'library/uniq';
import {
  $currentTag,
  $form,
  textChanged,
  fieldChanged,
  tagAdded,
  tagDeleted,
} from './model';

$currentTag.on(textChanged, (_, payload) => payload).reset(tagAdded);

$form
  .on(fieldChanged, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .on(
    tagAdded.filter({
      fn: (x) => Boolean(x.length) && isASCII(x),
    }),
    (state, payload) => ({
      ...state,
      tagList: uniq<string>([...state.tagList, payload]),
    }),
  )
  .on(tagDeleted, (state, payload) => ({
    ...state,
    tagList: state.tagList.filter((tag) => tag !== payload),
  }));

// $errors.on(createArticleFx.failData, (_, payload) => payload);
