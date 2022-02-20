import { api } from '@/shared/api';
import { limit } from '@/shared/library/limit';
import * as article from '@/entities/article';

export type getFeedPayload = Readonly<{
  username: string;
  page: number;
  pageSize: number;
}>;

export const getFeed = ({ username, page, pageSize }: getFeedPayload) => {
  const pageIndex = page - 1;

  return api.request<article.types.FeedType>({
    url: `/articles?favorited=${encodeURIComponent(username)}&${limit(
      pageSize,
      pageIndex,
    )}`,
    method: 'GET',
  });
};
