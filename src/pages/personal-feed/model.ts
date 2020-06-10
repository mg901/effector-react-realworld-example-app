import { createEffect, restore } from 'effector';
import { get } from '../../api';
import { Feed } from '../types';

export const getPersonalFeedFx = createEffect({
  handler: () => get<Feed>('/articles/feed?limit=10&offset=0'),
});

export const $personalFeed = restore<Feed>(getPersonalFeedFx.doneData, {
  articles: [],
  articlesCount: 0,
});
