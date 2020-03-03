export type Form = Readonly<{
  username: string;
  email: string;
  password: string;
}>;

export type FormField = Readonly<{
  [key: string]: string;
}>;

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

export type UserResponse = Readonly<{
  user: User;
}>;

export type Token = User['token'];

export type AuthError = Readonly<{
  errors: {
    [key: string]: string[];
  };
}>;

export type AuthErrors = AuthError['errors'];
