export type GateState = Readonly<{
  url: string;
}>;

export type Profile = Readonly<{
  bio: string;
  following: boolean;
  image: string;
  username: string;
}>;

export type FetchProfileFxDone = Readonly<{
  profile: Profile;
}>;

export type FetchFeedFxArgs = Readonly<{
  username: string;
  page: number;
  pageSize: number;
}>;
