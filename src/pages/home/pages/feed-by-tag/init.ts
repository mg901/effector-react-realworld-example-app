import { forward } from 'effector';
import {
  $feed,
  getFeedFx,
  PageGate,
  getFeedByTagFx,
  $currentTag,
} from './model';

forward({
  from: [PageGate.open, $currentTag.updates],
  to: getFeedByTagFx,
});

$feed.on(getFeedFx.done, (state, { params, result }) => ({
  ...state,
  [params.tag]: result,
}));
