import { AuthorizedUser } from '../types';

export type User = Pick<AuthorizedUser, 'image' | 'username' | 'bio' | 'email'>;
export type Password = Readonly<{
  password: string;
}>;

export type UserWithPassword = User & Password;
export type UpdatedUser = User | UserWithPassword;
