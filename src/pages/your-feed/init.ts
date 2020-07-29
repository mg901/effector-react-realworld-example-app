import { sample, forward } from 'effector';
import { $location } from '../../router';
import {
  PageGate,
  getYourFeedFx,
  getPageFromQueryParamsFx,
  setPageToQueryParamsFx,
  $currentPage,
  currentPageSetted,
} from './model';

sample({
  source: $currentPage,
  clock: [PageGate.open, currentPageSetted],
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
