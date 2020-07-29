import { sample, merge } from 'effector';
import { $location } from '../../router';
import {
  PageGate,
  $currentPage,
  $$currentTag,
  $feed,
  getFeedByTagFx,
  currentPageSetted,
  setPageToQueryParamFx,
  getPageFromQueryParamsFx,
} from './model';

sample({
  source: { tag: $$currentTag, page: $currentPage },
  clock: merge([$$currentTag, PageGate.open, currentPageSetted]),
  target: getFeedByTagFx,
});

sample({
  source: $location,
  clock: PageGate.open,
  target: getPageFromQueryParamsFx,
});

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
