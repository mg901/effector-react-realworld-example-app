export type Author = {
  username: string;
  bio: null | string;
  image: string;
  following: boolean;
};

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

export type FeedType = Readonly<{
  articles: readonly Article[];
  articlesCount: number;
}>;

export type SelectedArticle = Pick<
  Article,
  'slug' | 'favorited' | 'favoritesCount'
>;

export type ToggleFavoriteArticleResponse = {
  article: Article;
};
