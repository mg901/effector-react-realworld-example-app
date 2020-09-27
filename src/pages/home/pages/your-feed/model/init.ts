import { forward } from 'effector';
import { $yourFeed, PageGate, $currentTag, getYourFeedFx } from './model';

$yourFeed.on(getYourFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, $currentTag],
  to: getYourFeedFx,
});
