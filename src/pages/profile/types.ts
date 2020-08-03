export type Profile = {
  bio: string;
  following: boolean;
  image: string;
  username: string;
};

export type ProfileResponse = {
  profile: Profile;
};

export type GetArticles = {
  author: string;
  page?: number;
};
