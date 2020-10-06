import { forward, attach } from 'effector';
import {
  Gate,
  $feed,
  $currentPage,
  $pageSize,
  currentPageWasSet,
  fetchFeedFx,
} from '.';
import * as model from '../../../model';

$feed.on(fetchFeedFx.doneData, (_, payload) => payload);

forward({
  from: [Gate.open, currentPageWasSet],
  to: attach({
    source: {
      username: model.$username,
      page: $currentPage,
      pageSize: $pageSize,
    },
    effect: fetchFeedFx,
  }),
});
