import { useStore } from 'effector-react';
import { $errors, signInFx } from './model';
import { Errors } from './types';

export const useErrors = (): Errors => useStore($errors);
export const useLoading = (): boolean => useStore(signInFx.pending);