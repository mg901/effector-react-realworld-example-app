import { useStore } from 'effector-react';
import { $slug, $comments, $error } from './model';
import { Comments, Errors } from './types';

export const useSlug = (): string => useStore($slug);
export const useComments = (): Comments => useStore($comments);
export const useErrors = (): Errors => useStore($error);
