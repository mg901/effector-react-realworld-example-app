import { Feed } from '../types';

export type Tags = Readonly<{
  tags: readonly string[];
}>;

export type PostsByTag = {
  [key: string]: Feed;
};
