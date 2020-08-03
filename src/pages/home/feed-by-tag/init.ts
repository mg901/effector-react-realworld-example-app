import { sample } from 'effector';
import { $location } from '../../../router';
import {
  setPageToQueryParamsFx,
  getPageFromQueryParamsFx,
} from '../../../library';
import {
  PageGate,
  $currentPage,
  $$currentTag,
  getFeedByTagFx,
  currentPageSetted,
} from './model';

sample({
  source: { tag: $$currentTag, page: $currentPage },
  clock: [$$currentTag, PageGate.open, currentPageSetted],
  target: getFeedByTagFx,
});

sample({
  source: $location,
  clock: PageGate.open,
  target: getPageFromQueryParamsFx,
});

sample({
  source: $location,
  clock: currentPageSetted,
  fn: ({ pathname, search }, page) => ({
    pathname,
    search,
    page,
  }),
  target: setPageToQueryParamsFx,
});
