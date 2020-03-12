import { createEffect } from 'effector';
import { get } from '../../api';
import { limit } from '../../lib';
import { Feed } from '../types';

export const fxFetchGlobalFeed = createEffect({
  handler: (page?: number) => get<Feed>(`/articles?${limit(10, page)}`),
});
