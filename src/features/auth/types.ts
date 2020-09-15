export type Form = Readonly<{
  email: string;
  password: string;
  username?: string;
}>;

export type FormField = Readonly<Record<string, string>>;

export type AuthorizedUser = Readonly<{
  image: string;
  username: string;
  bio: string;
  email: string;
  token: string | null;
  id: number | null;
  createdAt: string;
  updatedAt: string;
}>;

export type AuthUserResponse = Readonly<{
  user: AuthorizedUser;
}>;

export type Token = null | string;

export type AuthFail = Readonly<{
  errors: readonly string[];
}>;
