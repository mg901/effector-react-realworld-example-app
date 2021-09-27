import { StoreValue } from 'effector';
import { useStore } from 'effector-react';
import { signInFx, $error } from './login';

export const useSignInPending = (): boolean => useStore(signInFx.pending);

export const useError = (): StoreValue<typeof $error> => useStore($error);
