import { forward, attach } from 'effector';
import {
  PageGate,
  $feed,
  $currentPage,
  $pageSize,
  currentPageWasSet,
  fetchFeedFx,
} from './model';

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, currentPageWasSet],
  to: attach({
    source: {
      pageSize: $pageSize,
      page: $currentPage,
    },
    effect: fetchFeedFx,
  }),
});
