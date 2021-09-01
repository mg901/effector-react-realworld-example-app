import { types } from 'shared/user';

export type changeUserDataFxArgs = Pick<
  types.User,
  'image' | 'username' | 'bio' | 'email'
> &
  Readonly<{
    password: string;
  }>;

export type Errors = Readonly<{
  errors: Readonly<Record<string, string>>;
}>;
