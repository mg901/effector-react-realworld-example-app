import { forward, attach } from 'effector';
import {
  PageGate,
  $isFirstBoot,
  $feed,
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
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
