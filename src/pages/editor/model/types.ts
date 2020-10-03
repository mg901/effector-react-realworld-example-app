import * as types from 'features/types';

export type Form = Pick<
  types.Article,
  'slug' | 'title' | 'description' | 'body' | 'tagList'
>;

export type Errors = Readonly<{
  errors: Readonly<Record<string, string>>;
}>;
