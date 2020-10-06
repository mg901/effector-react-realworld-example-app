import { types } from '../../../../features/feed';

export type Comment = Readonly<{
  author: types.Author;
  body: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}>;

export type GetCommentsFxDone = Readonly<{
  comments: readonly Comment[];
}>;

export type AddCommentFxArgs = Readonly<{
  slug: string;
  body: string;
}>;

export type DeleteCommentFxArgs = Readonly<{
  slug: string;
  id: string;
}>;

export type Errors = Readonly<{
  errors: Readonly<Record<string, string>>;
}>;
