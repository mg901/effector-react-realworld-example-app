export type Author = Readonly<{
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
}>;

export type Article = Readonly<{
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
}>;

export type Articles = Readonly<{
  articles: readonly Article[];
  articlesCount: number;
}>;
