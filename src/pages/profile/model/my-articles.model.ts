import { createEffect, restore } from 'effector';
import { get } from '../../../api';
import { limit } from '../../../library';
import { Feed } from '../../types';
import * as T from './types';

export const getFeedFx = createEffect({
  handler: ({ author, page }: T.GetFeedArgs) =>
    get<Feed>(
      `/articles?author=${encodeURIComponent(author)}&${limit(
        5,
        Number(page),
      )}`,
    ),
});

export const $feed = restore(getFeedFx.doneData, {
  articles: [],
  articlesCount: 0,
});

export const $articles = $feed.map((x) => x.articles);
export const $totalPages = $feed.map((x) => x.articlesCount);
