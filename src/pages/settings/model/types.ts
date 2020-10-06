import { User } from '../../../features/user/types';

export type changeUserDataFxArgs = Pick<
  User,
  'image' | 'username' | 'bio' | 'email'
> &
  Readonly<{
    password: string;
  }>;

export type Errors = Readonly<{
  errors: Readonly<Record<string, string>>;
}>;
