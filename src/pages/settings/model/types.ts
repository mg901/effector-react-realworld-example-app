import * as user from 'shared/entities/user';
import { ReadonlyDeep } from 'type-fest';

export type changeUserDataFxArgs = Pick<
  user.types.User,
  'image' | 'username' | 'bio' | 'email'
> &
  Readonly<{
    password: string;
  }>;

export type Errors = ReadonlyDeep<{
  errors: Record<string, string>;
}>;
