import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { signUpFx, $error } from './registration';

export const useSignUpPending = (): boolean => useStore(signUpFx.pending);

export const useError = (): StoreValue<typeof $error> => useStore($error);
