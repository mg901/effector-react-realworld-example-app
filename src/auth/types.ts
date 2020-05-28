export type Form = Readonly<{
  username: string;
  email: string;
  password: string;
}>;

export type FormField = Readonly<Record<string, string>>;
export type AuthUserResponse = Readonly<{
  user: {
    image: string;
    username: string;
    bio: string;
    email: string;
    token: string | null;
    id: number | null;
    createdAt: string;
    updatedAt: string;
  };
}>;

export type AuthorizedUser = AuthUserResponse['user'];

export type Token = null | string;

export type ResponseFail = Readonly<{
  errors: readonly string[];
}>;
