import { sample, merge, forward } from 'effector';
import { $location } from '../../router';
import {
  PageGate,
  getYourFeedFx,
  getPageFromQueryParamsFx,
  setPageToQueryParamsFx,
  $currentPage,
  currentPageSetted,
  $yourFeed,
} from './model';

sample({
  source: $currentPage,
  clock: merge([PageGate.open, currentPageSetted]),
  target: getYourFeedFx,
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

$yourFeed.on(getYourFeedFx.doneData, (_, payload) => payload);

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
