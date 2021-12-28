import * as article from '@/entities/article';
import * as http from '@/shared/http';
import { limit } from '@/shared/library/limit';

export type GetFeedPayload = Readonly<{
  tag: string;
  page: number;
  pageSize: number;
}>;

export const getFeed = ({ page, tag, pageSize }: GetFeedPayload) => {
  const pageIndex = page - 1;

  return http.request<article.types.FeedType>({
    url: `articles?tag=${encodeURIComponent(tag)}&${limit(
      pageSize,
      pageIndex,
    )}`,
    method: 'get',
  });
};
