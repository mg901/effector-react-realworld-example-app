import * as visitor from 'entities/visitor';

export type FormValues = Pick<
  visitor.types.Visitor,
  'image' | 'username' | 'bio' | 'email'
> & {
  password?: string;
};
