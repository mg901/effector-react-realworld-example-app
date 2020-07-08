import { sample, merge, forward } from 'effector';
import { $location } from '../../router';
import {
  getPageFromQueryParamsFx,
  setPageToQueryParamsFx,
  PageGate,
  getGlobalFeedFx,
  $currentPage,
  currentPageSetted,
  $globalFeed,
} from './model';

sample({
  source: $currentPage,
  clock: merge([PageGate.open, currentPageSetted]),
  target: getGlobalFeedFx,
});

sample({
  source: $location,
  clock: PageGate.open,
  target: getPageFromQueryParamsFx,
});

forward({
  from: $location,
  to: getPageFromQueryParamsFx,
});

$globalFeed.on(getGlobalFeedFx.doneData, (_, payload) => payload);

$currentPage.on(
  [currentPageSetted, getPageFromQueryParamsFx.doneData],
  (_, payload) => payload,
);

sample({
  source: $location,
  clock: currentPageSetted,
  fn: ({ pathname, search }, page) => ({ pathname, search, page }),
  target: setPageToQueryParamsFx,
});
