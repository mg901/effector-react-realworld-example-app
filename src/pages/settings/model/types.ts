import * as visitor from '@/entities/visitor';

export type FormInputs = Pick<
  visitor.types.Visitor,
  'image' | 'username' | 'bio' | 'email'
> & {
  password?: string;
};
