import * as visitor from 'entities/visitor';

export type changeUserDataFxArgs = Pick<
  visitor.types.User,
  'image' | 'username' | 'bio' | 'email'
> & {
  password: string;
};
