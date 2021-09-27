import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { addCommentFx, $errors, $hasError } from './comments';

export const useAddCommentPending = (): boolean =>
  useStore(addCommentFx.pending);

export const useHasError = (): boolean => useStore($hasError);
export const useErrors = (): StoreValue<typeof $errors> => useStore($errors);
