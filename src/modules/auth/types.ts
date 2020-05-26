export type Form = Readonly<{
  username: string;
  email: string;
  password: string;
}>;

export type FormField = Readonly<{
  [key: string]: string;
}>;

export type AuthorizedUserResponse = Readonly<{
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

export type AuthorizedUser = AuthorizedUserResponse['user'];

export type Token = null | string;

export type ResponseFail = Readonly<{
  errors: readonly string[];
}>;

export type Errors = ResponseFail['errors'];
