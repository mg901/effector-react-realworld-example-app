import { createEffect } from 'effector';
import { get } from '../../api';
import { Feed } from '../types';

export const fxFetchPersonalFeed = createEffect<void, Feed, Error>({
  handler: () => get<Feed>('/articles/feed?limit=10&offset=0'),
});
