import { createEvent } from 'effector';
import { FormField } from './types';

export const textChanged = createEvent<FormField>();
export const signIn = createEvent();
export const signUp = createEvent();
export const loggedOut = createEvent();

export const handleTextChanged = textChanged.prepend(
  (e: React.ChangeEvent<HTMLInputElement>) => ({
    [e.currentTarget.name]: e.currentTarget.value,
  }),
);
