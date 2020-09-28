import { forward, attach, sample } from 'effector';
import * as router from 'library/router';
import * as profile from '../../../model';
import {
  $feed,
  $isFirstBoot,
  $currentPage,
  $pageSize,
  getFeedFx,
  currentPageSettled,
  PageGate,
  changeUrlFx,
  setUnfavoriteArticleFx,
} from './model';

$isFirstBoot.on(getFeedFx.done, () => false);
$feed.on(getFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, $currentPage, setUnfavoriteArticleFx.done],
  to: attach({
    source: {
      pageSize: $pageSize,
      username: profile.model.$username,
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
