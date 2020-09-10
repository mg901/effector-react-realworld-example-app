import * as types from '../../model/types';

export type FeedByTag = Readonly<Record<string, types.Feed>>;

export type GetFeedByTagArgs = {
  tag: string;
  page: number;
};
