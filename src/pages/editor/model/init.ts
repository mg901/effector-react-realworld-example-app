import { uniq } from '../../../library';
import * as model from './model';

model.$currentTag
  .on(model.textChanged, (_, payload) => payload)
  .reset(model.tagAdded);

model.$form
  .on(model.fieldChanged, (state, payload) => ({
    ...state,
    ...payload,
  }))
  .on(
    model.tagAdded.filter({
      fn: (x) => Boolean(x.length),
    }),
    (state, payload) => ({
      ...state,
      tagList: uniq<string>([...state.tagList, payload]),
    }),
  )
  .on(model.tagDeleted, (state, payload) => ({
    ...state,
    tagList: state.tagList.filter((tag) => tag !== payload),
  }));
