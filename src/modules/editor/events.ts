import { createEvent } from 'effector';
import { InputField, ChangeEvent } from './types';

export const textChanged = createEvent<string>();
export const fieldChanged = createEvent<InputField>();
export const articleCreated = createEvent<void>();
export const articleEdited = createEvent<void>();
export const tagAdded = createEvent<string>();
export const tagRemoved = createEvent<string>();

export const handleTextChanged = textChanged.prepend(
  (e: ChangeEvent) => e.target.value,
);

export const handleFieldChanged = fieldChanged.prepend((e: ChangeEvent) => ({
  [e.target.name]: e.currentTarget.value,
}));

export const addedNonEmptyTag = tagAdded.filter({
  fn: (x) => x.length > 0,
});
