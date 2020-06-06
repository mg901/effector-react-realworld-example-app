import { createEffect, restore } from 'effector';
import { get } from '../../api';
import { Feed } from '../types';

export const fxFetchPersonalFeed = createEffect({
  handler: () => get<Feed>('/articles/feed?limit=10&offset=0'),
});

export const $personalFeed = restore<Feed>(fxFetchPersonalFeed.doneData, {
  articles: [],
  articlesCount: 0,
});
