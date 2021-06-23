export type Form = Readonly<{
  email: string;
  password: string;
}>;

export type Errors = Readonly<{
  errors: Readonly<Record<string, string>>;
}>;
