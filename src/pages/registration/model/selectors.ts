import { useStore } from 'effector-react';
import { $errors, signUpFx } from './model';
import { Errors } from './types';

export const useErrors = (): Errors => useStore($errors);
export const useSignUpPending = (): boolean => useStore(signUpFx.pending);
