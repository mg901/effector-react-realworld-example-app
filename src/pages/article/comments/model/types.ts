import { types } from 'shared/feed';
import { ReadonlyDeep } from 'type-fest';

export type Comment = Readonly<{
  author: types.Author;
  body: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}>;

export type Comments = readonly Comment[];

export type AddCommentFxArgs = Readonly<{
  slug: string;
  body: string;
}>;

export type DeleteCommentFxArgs = Readonly<{
  slug: string;
  id: string;
}>;

export type Errors = ReadonlyDeep<{
  errors: Record<string, string>;
}>;
