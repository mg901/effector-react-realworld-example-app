import { ReadonlyDeep } from 'type-fest';

export type Form = Readonly<Record<string, string>>;

export type Errors = ReadonlyDeep<{
  errors: Record<string, string>;
}>;
