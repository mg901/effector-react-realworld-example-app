import { createEffect, restore } from 'effector';
import { get } from '../../api';
import { Feed } from '../types';

export const fxFetchYourFeed = createEffect({
  handler: () => get<Feed>('/articles/feed?limit=10&offset=0'),
});

export const $personalFeed = restore<Feed>(fxFetchYourFeed.doneData, {
  articles: [],
  articlesCount: 0,
});
