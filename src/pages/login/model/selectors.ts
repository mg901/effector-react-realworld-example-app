import { useStore } from 'effector-react';
import { signInFx } from './login';

export const useSignInPending = (): boolean => useStore(signInFx.pending);
