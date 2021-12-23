import * as article from 'entities/article';
import * as api from 'shared/api';
import { limit } from 'shared/library/limit';

export type getFeedPayload = Readonly<{
  username: string;
  page: number;
  pageSize: number;
}>;

export const getFeed = ({ username, page, pageSize }: getFeedPayload) => {
  const pageIndex = page - 1;

  return api
    .get<article.types.FeedType>(
      `articles?favorited=${encodeURIComponent(username)}&${limit(
        pageSize,
        pageIndex,
      )}`,
    )
    .then((response) => response.data);
};
