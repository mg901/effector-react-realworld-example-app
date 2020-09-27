export type Form = Readonly<{
  email: string;
  password: string;
  username?: string;
}>;

export type FormField = Readonly<Record<string, string>>;

export type User = Readonly<{
  image: string;
  username: string;
  bio: string;
  email: string;
  token: string | null;
  id: number | null;
  createdAt: string;
  updatedAt: string;
}>;

export type SignUpFxDone = Readonly<{
  user: User;
}>;

export type Token = null | string;
