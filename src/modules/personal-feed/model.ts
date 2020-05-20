import { restore } from 'effector';
import { Feed } from '../types';
import { fxFetchPersonalFeed } from './effects';

export const $personalFeed = restore<Feed>(fxFetchPersonalFeed.doneData, {
  articles: [],
  articlesCount: 0,
});
