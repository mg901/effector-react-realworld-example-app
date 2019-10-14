import { createStore, combine, forward } from 'effector';
import { fetchGlobalFeed, fetchUserFeed, fetchFeedByTag } from './model.events';
import { $selectedTag } from '../tags/model';

const initialState = { articles: [], articlesCount: null };

export const $globalFeed = createStore(initialState);
export const $userFeed = createStore(initialState);
export const $postsByTag = createStore({});

$globalFeed.on(fetchGlobalFeed.done, (state, { result }) => ({
  ...state,
  ...result,
}));

$globalFeed.watch((x) => console.log('global', x));

$userFeed.on(fetchUserFeed.done, (state, { result }) => ({
  ...state,
  ...result,
}));

$postsByTag.on(fetchFeedByTag.done, (state, { params, result }) => ({
  ...state,
  [params]: {
    ...result,
  },
}));

forward({
  from: $selectedTag,
  to: fetchFeedByTag,
});

export const $feedByTag = combine(
  $postsByTag,
  $selectedTag,
  (postsMap, tag) => {
    const posts = postsMap[tag];

    return posts ? posts.articles : [];
  },
);
