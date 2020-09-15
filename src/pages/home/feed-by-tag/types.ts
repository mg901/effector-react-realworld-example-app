import { types } from '../../../library/feed';

export type FeedByTag = Readonly<Record<string, types.Feed>>;

export type GetFeedByTagArgs = {
  tag: string;
  page: number;
};
