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

export type Slug = Article['slug'];

export type Feed = Readonly<{
  articles: readonly Article[];
  articlesCount: number;
}>;

export type BackendError = Readonly<{
  errors: {
    [key: string]: readonly string[];
  };
}>;

export type ErrorList = BackendError['errors'];
