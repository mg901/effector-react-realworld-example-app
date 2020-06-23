import { sample, merge } from 'effector';
import {
  PageGate,
  getGlobalFeedFx,
  $currentPage,
  currentPageSetted,
  $globalFeed,
} from './model';

$currentPage.on(currentPageSetted, (_, payload) => payload);
$globalFeed.on(getGlobalFeedFx.doneData, (_, payload) => payload);

sample({
  source: $currentPage,
  clock: merge([PageGate.open, currentPageSetted]),
  target: getGlobalFeedFx,
});
