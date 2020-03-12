import { createStore } from 'effector';
import { Feed } from '../types';
import { fxFetchPersonalFeed } from './effects';

export const $personalFeed = createStore<Feed>({
  articles: [],
  articlesCount: 0,
});

$personalFeed.on(fxFetchPersonalFeed.done, (_, { result }) => result);
