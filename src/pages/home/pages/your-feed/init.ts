import { forward } from 'effector';

import { PageGate, $yourFeed, getYourFeedFx, $currentPage } from './model';

forward({
  from: PageGate.open,
  to: getYourFeedFx,
});

forward({
  from: $currentPage.updates,
  to: getYourFeedFx,
});

$yourFeed.on(getYourFeedFx.doneData, (_, payload) => payload);
