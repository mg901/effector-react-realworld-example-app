import * as article from '@/entities/article';
import * as http from '@/shared/http';
import { limit } from '@/shared/library/limit';

export type getFeedPayload = Readonly<{
  username: string;
  page: number;
  pageSize: number;
}>;

export const getFeed = ({ username, page, pageSize }: getFeedPayload) => {
  const pageIndex = page - 1;

  return http.request<article.types.FeedType>({
    url: `articles?favorited=${encodeURIComponent(username)}&${limit(
      pageSize,
      pageIndex,
    )}`,
    method: 'get',
  });
};
