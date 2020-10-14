import { types } from 'modules/user';

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
