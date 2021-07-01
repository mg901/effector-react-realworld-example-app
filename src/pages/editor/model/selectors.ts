import { useStore } from 'effector-react';
import { $errors, createArticleFx } from './model';
import { Errors } from './types';

export const useErrors = (): Errors => useStore($errors);
export const useCreateArticlePending = (): boolean =>
  useStore(createArticleFx.pending);
