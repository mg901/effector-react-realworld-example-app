import { createEffect, restore } from 'effector';
import { limit } from '@library';
import * as api from '@api';
import { Feed } from '../../types';
import * as types from '../types';

export const getFeedFx = createEffect(({ author, page }: types.GetFeedArgs) =>
  api.get<Feed>(
    `/articles?author=${encodeURIComponent(author)}&${limit(5, Number(page))}`,
  ),
);

export const $feed = restore(getFeedFx.doneData, {
  articles: [],
  articlesCount: 0,
});

export const $articles = $feed.map((x) => x.articles);
export const $totalPages = $feed.map((x) => x.articlesCount);
