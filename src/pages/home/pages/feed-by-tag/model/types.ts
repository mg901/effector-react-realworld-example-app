import { types } from 'features/feed';

export type FeedByTag = Readonly<Record<string, types.Feed>>;

export type GetFeedByTagArgs = {
  tag: string;
  page: number;
};
