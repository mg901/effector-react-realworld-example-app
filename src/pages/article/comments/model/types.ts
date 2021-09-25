export type Comment<Author> = {
  author: Author;
  body: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type AddCommentFxArgs = Readonly<{
  slug: string;
  body: string;
}>;

export type DeleteCommentFxArgs = Readonly<{
  slug: string;
  id: string;
}>;
