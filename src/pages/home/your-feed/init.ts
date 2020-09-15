import { forward } from 'effector';
import { $yourFeed, getYourFeedFx, PageGate, $currentTag } from './model';

$yourFeed.on(getYourFeedFx.doneData, (_, payload) => payload);

forward({
  from: [PageGate.open, $currentTag.updates],
  to: getYourFeedFx,
});
