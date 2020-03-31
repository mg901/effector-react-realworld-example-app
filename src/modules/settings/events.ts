import { createEvent } from 'effector';
import { FormField, ChangeEvent } from '../types';

export const textChanged = createEvent<string>();
export const fieldChanged = createEvent<FormField>();
export const formSubmitted = createEvent<void>();
export const loggedOut = createEvent<void>();

export const handleTextChanged = textChanged.prepend(
  (e: ChangeEvent) => e.currentTarget.value,
);

export const handleFieldChanged = fieldChanged.prepend((e: ChangeEvent) => ({
  [e.target.name]: e.currentTarget.value,
}));
