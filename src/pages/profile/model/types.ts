export type ProfileGateProps = Readonly<{
  url: string;
}>;

export type Profile = Readonly<{
  bio: string;
  following: boolean;
  image: string;
  username: string;
}>;

export type ProfileResponse = Readonly<{
  profile: Profile;
}>;

export type GetFeedArgs = Readonly<{
  author: string;
  page?: number;
}>;
