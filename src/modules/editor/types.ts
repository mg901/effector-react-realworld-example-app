import { Article } from '../types';

export type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type FormField = Readonly<{
  [key: string]: string;
}>;

export type InputField = {
  [key: string]: string;
};

export type Slug = Article['slug'];

export type Form = Readonly<{
  title: string;
  description: string;
  body: string;
}>;

export type Tags = readonly string[];

export type NewArticle = Readonly<{ tagList: Tags }> & Form;
