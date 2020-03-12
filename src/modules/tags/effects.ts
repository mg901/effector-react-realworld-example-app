import { createEffect } from 'effector';
import { get } from '../../api';
import { limit } from '../../lib';
import { Tags } from './types';
import { Articles } from '../types';

export const fxFetchTags = createEffect({
  handler: () => get<Tags>('/tags'),
});

type FxFetchFeedByTag = Readonly<{
  tag: string;
  page?: number;
}>;

export const fxFetchFeedByTag = createEffect<FxFetchFeedByTag, Articles, Error>(
  {
    handler: ({ tag, page }) =>
      get<Articles>(
        `/articles?tag=${encodeURIComponent(tag)}&${limit(10, page)}`,
      ),
  },
);
