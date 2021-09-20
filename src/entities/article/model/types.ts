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
  tagList: readonly string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}

export interface FeedType {
  articles: readonly Article[];
  articlesCount: number;
}
