import { createEvent } from 'effector';
import { FormField } from './types';
import { ChangeEvent } from '../types';

export const textChanged = createEvent<FormField>();
export const signIn = createEvent();
export const signUp = createEvent();
export const loggedOut = createEvent();

export const handleTextChanged = textChanged.prepend((e: ChangeEvent) => ({
  [e.currentTarget.name]: e.currentTarget.value,
}));
