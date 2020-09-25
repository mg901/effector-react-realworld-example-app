export type Form = Readonly<{
  username: string;
  email: string;
  password: string;
}>;

export type ErrorType = Readonly<{
  errors: readonly string[];
}>;
