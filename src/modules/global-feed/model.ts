import { createStore } from 'effector';
import { fxFetchGlobalFeed } from './effects';
import { Feed } from '../types';

export const $globalFeed = createStore<Feed>({
  articles: [],
  articlesCount: 0,
});

$globalFeed.on(fxFetchGlobalFeed.done, (_, { result }) => result);
