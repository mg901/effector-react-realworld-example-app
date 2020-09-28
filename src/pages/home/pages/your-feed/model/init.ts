import { forward, attach, sample } from 'effector';
import * as router from 'library/router';
import {
  PageGate,
  $isFirstBoot,
  $feed,
  $currentPage,
  $pageSize,
  currentPageSettled,
  getFeedFx,
  changeUrlFx,
} from './model';

$isFirstBoot.on(getFeedFx.done, () => false);

$feed.on(getFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, $currentPage],
  to: attach({
    source: {
      pageSize: $pageSize,
      page: $currentPage,
    },
    effect: getFeedFx,
  }),
});

sample({
  source: router.model.$pathname,
  clock: currentPageSettled,
  fn: (path, page) => ({ path, page }),
  target: changeUrlFx,
});
