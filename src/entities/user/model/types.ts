import * as http from '@/shared/http';

export interface User {
  image: string;
  username: string;
  bio: string;
  email: string;
  token: string | null;
  id: number | null;
}

export type UserResponse = {
  user: User;
};

export type UpdateUserArgs = Omit<User, 'token' | 'id'> & {
  password: string;
};

export type FailData = {
  errors: Record<string, unknown>;
};

export type UserError = http.types.IHttpClientError<FailData>;
