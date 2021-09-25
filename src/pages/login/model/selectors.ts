import { useStore } from 'effector-react';
import { signInFx } from './model';

export const useSignInPending = (): boolean => useStore(signInFx.pending);
