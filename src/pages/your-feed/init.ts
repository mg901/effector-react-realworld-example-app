import { sample } from 'effector';
import {
  PageGate,
  getYourFeedFx,
  $currentPage,
  currentPageSetted,
  $personalFeed,
} from './model';

$currentPage.on(currentPageSetted, (_, payload) => payload);
$personalFeed.on(getYourFeedFx.doneData, (_, payload) => payload);

sample({
  source: $currentPage,
  clock: PageGate.open,
  target: getYourFeedFx,
});
