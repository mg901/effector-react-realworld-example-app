import { createEffect, restore } from 'effector';
import { get } from '../../../api';
import { limit } from '../../../library';
import { Feed } from '../../types';
import * as types from '../types';

export const getFeedFx = createEffect(({ author, page }: types.GetFeedArgs) =>
  get<Feed>(
    `/articles?favorited=${encodeURIComponent(author)}&${limit(5, page)}`,
  ),
);

export const $feed = restore(getFeedFx.doneData, {
  articles: [],
  articlesCount: 0,
});

export const $$articles = $feed.map((x) => x.articles);
export const $$totalPages = $feed.map((x) => x.articlesCount);
