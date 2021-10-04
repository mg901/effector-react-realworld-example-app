import * as user from 'entities/user';

export type changeUserDataFxArgs = Pick<
  user.types.User,
  'image' | 'username' | 'bio' | 'email'
> & {
  password: string;
};
