import { uniq } from '../../library';
import { $form, fieldChanged, tagAdded, tagDeleted } from './model';

$form
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
