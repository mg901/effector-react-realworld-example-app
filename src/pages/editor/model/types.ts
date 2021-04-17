import { types } from 'shared/feed';
import { ReadonlyDeep } from 'type-fest';

export type GateState = Readonly<{
  slug: string;
}>;

export type Form = Pick<
  types.Article,
  'slug' | 'title' | 'description' | 'body' | 'tagList'
>;

export type Errors = ReadonlyDeep<{
  errors: Record<string, string>;
}>;
