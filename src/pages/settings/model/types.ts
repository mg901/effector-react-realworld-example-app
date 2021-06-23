import * as user from 'entities/user';

export type changeUserDataFxArgs = Pick<
  user.types.User,
  'image' | 'username' | 'bio' | 'email'
> &
  Readonly<{
    password: string;
  }>;
export type Errors = Readonly<{
  errors: Readonly<Record<string, string>>;
}>;
