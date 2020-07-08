import { sample, merge, guard } from 'effector';
import { $location } from '../../router';
import {
  PageGate,
  $currentPage,
  $$currentTag,
  $feed,
  getFeedByTagFx,
  currentPageSetted,
  setPageToQueryParamFx,
} from './model';

sample({
  source: { tag: $$currentTag, page: $currentPage },
  clock: merge([$$currentTag, PageGate.open, currentPageSetted]),
  target: getFeedByTagFx,
});

$currentPage
  .on(currentPageSetted, (_, payload) => payload)
  .reset($$currentTag.updates);

$feed.on(getFeedByTagFx.done, (state, { params, result }) => ({
  ...state,
  [params.tag]: result,
}));

sample({
  source: $location,
  clock: currentPageSetted,
  fn: ({ pathname, search }, page) => ({
    pathname,
    search,
    page,
  }),
  target: setPageToQueryParamFx,
});
