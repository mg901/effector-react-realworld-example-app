import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { createArticleFx, $hasError, $errors } from './editor';

export const useCreateArticlePending = (): boolean =>
  useStore(createArticleFx.pending);

export const useHasError = (): boolean => useStore($hasError);
export const useErrors = (): StoreValue<typeof $errors> => useStore($errors);
