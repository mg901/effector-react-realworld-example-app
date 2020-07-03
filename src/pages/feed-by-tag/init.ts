import { sample } from 'effector';
import { $currentPage, $$currentTag, $feed, getFeedByTagFx } from './model';

sample({
  source: { tag: $$currentTag, page: $currentPage },
  clock: $$currentTag,
  target: getFeedByTagFx,
});

$feed.on(getFeedByTagFx.done, (state, { params, result }) => ({
  ...state,
  [params.tag]: result,
}));
