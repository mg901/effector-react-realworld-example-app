import { forward, attach } from 'effector';
import * as profile from '../../../model';
import {
  PageGate,
  $feed,
  $isFirstBoot,
  $currentPage,
  $pageSize,
  fetchFeedFx,
} from './model';

$isFirstBoot.on(fetchFeedFx.done, () => false);

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, $currentPage],
  to: attach({
    source: {
      pageSize: $pageSize,
      username: profile.model.$username,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
