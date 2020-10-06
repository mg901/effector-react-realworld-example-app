import { forward, attach } from 'effector';
import {
  Gate,
  $feed,
  $currentPage,
  $pageSize,
  currentPageWasSet,
  fetchFeedFx,
} from '.';

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [Gate.open, currentPageWasSet],
  to: attach({
    source: {
      pageSize: $pageSize,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
