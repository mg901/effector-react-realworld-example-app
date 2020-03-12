import { createStore, restore, sample } from 'effector';
import { fxFetchTags, fxFetchFeedByTag } from './effects';
import { tagSelected } from './events';
import { Tags } from './types';

export const $tags = createStore<Tags['tags']>([]);
export const $selectedTag = restore<string>(tagSelected, '');
export const $postsByTag = createStore({});

$tags.on(fxFetchTags.done, (_, { result }) => result.tags);

sample({
  source: $selectedTag,
  clock: tagSelected,
  fn: (tag) => ({ tag }),
  target: fxFetchFeedByTag,
});

$postsByTag.on(fxFetchFeedByTag.done, (state, { params, result }) => ({
  ...state,
  [params.tag]: {
    ...result,
  },
}));
