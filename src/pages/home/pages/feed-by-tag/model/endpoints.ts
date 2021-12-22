import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';

export type GetFeedPayload = Readonly<{
  tag: string;
  page: number;
  pageSize: number;
}>;

export const getFeed = async ({ page, tag, pageSize }: GetFeedPayload) => {
  const pageIndex = page - 1;
  const { data } = await api.get<article.types.FeedType>(
    `articles?tag=${encodeURIComponent(tag)}&${limit(pageSize, pageIndex)}`,
  );

  return data;
};
