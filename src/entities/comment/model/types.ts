export type Author = {
  username: string;
  bio: null | string;
  image: string;
  following: boolean;
};

export interface IComment {
  author: Author;
  body: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type AddCommentArgs = Readonly<{
  slug: string;
  body: string;
}>;

export type RemoveCommentArgs = Readonly<{
  slug: string;
  id: string;
}>;
