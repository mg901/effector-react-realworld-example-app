export type Form = Readonly<Record<string, string>>;

export type Errors = Readonly<{
  errors: Readonly<Record<string, string>>;
}>;
