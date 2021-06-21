import { useStore } from 'effector-react';
import { $hasSlug, $slug, $isEmptySlug, $errors } from './model';
import { Errors } from './types';

export const useSlug = (): string => useStore($slug);
export const useHasSlug = (): boolean => useStore($hasSlug);
export const useIsEmptySlug = (): boolean => useStore($isEmptySlug);
export const useErrors = (): Errors => useStore($errors);
