import * as visitor from '@/entities/visitor';

export type FormFieldsWithoutPassword = Pick<
  visitor.types.Visitor,
  'image' | 'username' | 'bio' | 'email'
>;

export type FormFieldsWithPassword = FormFieldsWithoutPassword & {
  password: string;
};
