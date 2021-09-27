import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { signInFx, $hasError, $errors } from './login';

export const useSignInPending = (): boolean => useStore(signInFx.pending);

export const useHasError = (): boolean => useStore($hasError);
export const useErrors = (): StoreValue<typeof $errors> => useStore($errors);
