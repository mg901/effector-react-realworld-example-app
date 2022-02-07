import * as session from '@/entities/session';

export type FormFieldsWithoutPassword = Pick<
  session.types.Visitor,
  'image' | 'username' | 'bio' | 'email'
>;

export type FormFieldsWithPassword = FormFieldsWithoutPassword & {
  password: string;
};
