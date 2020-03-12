import { createEffect } from 'effector';
import { get } from '../../api';
import { limit } from '../../lib';
import { Tags } from './types';
import { Feed } from '../types';

export const fxFetchTags = createEffect({
  handler: () => get<Tags>('/tags'),
});

type FxFetchFeedByTag = Readonly<{
  tag: string;
  page?: number;
}>;

export const fxFetchFeedByTag = createEffect<FxFetchFeedByTag, Feed, Error>({
  handler: ({ tag, page }) =>
    get<Feed>(`/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`),
});
