import * as article from '@/entities/article';
import * as http from '@/shared/http';
import { limit } from '@/shared/library/limit';

export type getFeedFxArgs = Readonly<{
  pageSize: number;
  page: number;
}>;

export const getFeed = ({ pageSize, page }: getFeedFxArgs) => {
  const pageIndex = page - 1;

  return http.request<article.types.FeedType>({
    url: `articles/feed?${limit(pageSize, pageIndex)}`,
    method: 'get',
  });
};
