import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { signUpFx, $hasError, $errors } from './registration';

export const useSignUpPending = (): boolean => useStore(signUpFx.pending);

export const useHasError = (): boolean => useStore($hasError);
export const useErrors = (): StoreValue<typeof $errors> => useStore($errors);
