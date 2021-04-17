import { ReadonlyDeep } from 'type-fest';

export type Form = Readonly<{
  email: string;
  password: string;
}>;

export type Errors = ReadonlyDeep<{
  errors: Record<string, string>;
}>;
