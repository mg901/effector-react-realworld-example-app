import * as types from 'features/types';

export type Form = Pick<
  types.Article,
  'slug' | 'title' | 'description' | 'body' | 'tagList'
>;

export type ErrorType = Readonly<{
  errors: readonly string[];
}>;
