export type PageGateType = Readonly<{
  url: string;
}>;

export type Profile = Readonly<{
  bio: string;
  following: boolean;
  image: string;
  username: string;
}>;

export type GetProfileFxDone = Readonly<{
  profile: Profile;
}>;

export type GetFeedFxArgs = Readonly<{
  username: string;
  page: number;
}>;
