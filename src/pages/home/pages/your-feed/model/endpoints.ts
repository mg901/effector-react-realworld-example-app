import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';

export type getFeedFxArgs = Readonly<{
  pageSize: number;
  page: number;
}>;

export const getFeed = ({ pageSize, page }: getFeedFxArgs) => {
  const pageIndex = page - 1;

  return api
    .get<article.types.FeedType>(`articles/feed?${limit(pageSize, pageIndex)}`)
    .then((response) => response.data);
};