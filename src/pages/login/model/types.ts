export type Form = Readonly<{
  email: string;
  password: string;
}>;

export type ErrorType = Readonly<{
  errors: readonly string[];
}>;
