import { forward, attach } from 'effector';
import * as profile from '../../../model';
import {
  $feed,
  $isFirstBoot,
  $currentPage,
  $pageSize,
  fetchFeedFx,
  PageGate,
  setUnfavoriteArticleFx,
} from './model';

$isFirstBoot.on(fetchFeedFx.done, () => false);
$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, $currentPage, setUnfavoriteArticleFx.done],
  to: attach({
    source: {
      pageSize: $pageSize,
      username: profile.model.$username,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
