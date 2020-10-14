import { types } from 'modules/feed';

export type Feed = Readonly<Record<string, types.Feed>>;

export type FetchFeedByTagArgs = Readonly<{
  tag: string;
  page: number;
  pageSize: number;
}>;
