type Author = {
  username: string;
  bio: string | null;
  image: string;
  following: boolean;
};

type Article = {
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
};

type Feed = {
  articles: Article[];
  articlesCount: number;
};
