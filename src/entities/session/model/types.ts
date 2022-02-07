export type SignInArgs = {
  email: string;
  password: string;
};

export type SignUpArgs = SignInArgs & {
  username: string;
};

export interface Visitor {
  image: string;
  username: string;
  bio: string;
  email: string;
  token: string | null;
  id: number | null;
}

export type VisitorResponse = {
  user: Visitor;
};

export type Token = Visitor['token'];

export type UpdateVisitorFxArgs = Omit<Visitor, 'token' | 'id'> & {
  password: string;
};
