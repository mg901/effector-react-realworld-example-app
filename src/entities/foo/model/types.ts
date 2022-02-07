export type Author = {
  username: string;
  bio: null | string;
  image: string;
  following: boolean;
};

export interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}

export type ArticleResponse = {
  article: Article;
};
