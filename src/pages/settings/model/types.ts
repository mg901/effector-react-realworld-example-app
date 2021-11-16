import * as visitor from 'entities/visitor';

export type changeUserDataFxArgs = Pick<
  visitor.types.Visitor,
  'image' | 'username' | 'bio' | 'email'
> & {
  password: string;
};
