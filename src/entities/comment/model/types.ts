import * as article from '@/entities/article';

export type Comment = Readonly<{
  author: article.types.Author;
  body: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}>;

export type AddCommentPayload = Readonly<{
  slug: string;
  body: string;
}>;

export type DeleteCommentPayload = Readonly<{
  slug: string;
  id: string;
}>;
