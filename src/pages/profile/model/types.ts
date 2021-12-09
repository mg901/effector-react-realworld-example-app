export type GateState = {
  username: string;
};

export type Profile = {
  bio: string;
  following: boolean;
  image: string;
  username: string;
};

export type FollowToggledArgs = Pick<Profile, 'username' | 'following'>;
