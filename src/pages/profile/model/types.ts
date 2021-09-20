export type GateState = Readonly<{
  username: string;
}>;

export type Profile = Readonly<{
  bio: string;
  following: boolean;
  image: string;
  username: string;
}>;
