import { sample, createStore, combine, forward } from 'effector';
import {
  getGlobalFeed,
  getUserFeed,
  getFeedByTag,
  refreshTimeout,
} from './model.events';
import { $selectedTag, selectTag } from '../tags/model';

const initialState = { articles: [], articlesCount: null };

export const $getGlobalFeed = createStore(initialState);
export const $getUserFeed = createStore(initialState);
export const $postsByTag = createStore({});

$getGlobalFeed.on(getGlobalFeed.done, (state, { result }) => ({
  ...state,
  ...result,
}));

$getUserFeed.on(getUserFeed.done, (state, { result }) => ({
  ...state,
  ...result,
}));

$postsByTag.on(getFeedByTag.done, (state, { params, result }) => ({
  ...state,
  [params]: {
    ...result,
  },
}));

forward({
  from: selectTag,
  to: getFeedByTag,
});

/**
  ON refreshTimeout.done call refreshTimeout again
*/
forward({
  from: refreshTimeout.done,
  to: refreshTimeout,
});

sample({
  source: $selectedTag,
  clock: refreshTimeout.done,
  target: getFeedByTag,
});

export const $feedByTag = combine(
  $postsByTag,
  $selectedTag,
  (postsMap, tag) => {
    const posts = postsMap[tag];

    return posts ? posts.articles : [];
  },
);
