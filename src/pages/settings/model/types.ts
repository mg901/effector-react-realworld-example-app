import { types } from 'shared/user';
import { ReadonlyDeep } from 'type-fest';

export type changeUserDataFxArgs = Pick<
  types.User,
  'image' | 'username' | 'bio' | 'email'
> &
  Readonly<{
    password: string;
  }>;

export type Errors = ReadonlyDeep<{
  errors: Record<string, string>;
}>;
