import * as http from '@/shared/http';

export type SignInArgs = {
  email: string;
  password: string;
  ctrl?: AbortController;
};

export type SignUpArgs = SignInArgs & {
  username: string;
};

export type FailData = {
  errors: Record<string, unknown>;
};

export type SessionError = http.types.IHttpClientError<FailData>;
