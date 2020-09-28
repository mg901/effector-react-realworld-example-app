import { types } from 'features/feed';

export type FeedByTag = Readonly<Record<string, types.Feed>>;

export type ChangeUrlFxArgs = Readonly<{
  path: string;
  tag: string;
  page: number;
}>;

export type GetFeedByTagArgs = Readonly<{
  tag: string;
  page: number;
  pageSize: number;
}>;
