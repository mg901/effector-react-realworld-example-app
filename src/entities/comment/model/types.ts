import * as article from '@/entities/article';

export type CommentType = Readonly<{
  author: article.types.Author;
  body: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}>;

export type AddCommentArgs = Readonly<{
  slug: string;
  body: string;
}>;

export type DeleteCommentArgs = Readonly<{
  slug: string;
  id: string;
}>;
