import { createEvent, StoreValue } from 'effector';
import { useStoreMap } from 'effector-react';
import * as types from './types';

export const useFormField: types.UseFormField = ({ store, name }) =>
  useStoreMap({
    store,
    keys: [name],
    fn: (value, [key]) => value[key as keyof StoreValue<typeof store>] ?? '',
  });

export const createFormEvents: types.CreateFormEvents = () => {
  const textChanged = createEvent<string>();
  const handleTextChanged = textChanged.prepend(
    (e: types.ChangeEvent) => e.target.value,
  );

  const fieldChanged = createEvent<types.Field>();
  const handleFieldChanged = fieldChanged.prepend((e: types.ChangeEvent) => ({
    [e.target.name]: e.target.value,
  }));

  const formSubmitted = createEvent<React.FormEvent>();
  formSubmitted.watch((e) => e.preventDefault());

  return {
    textChanged,
    handleTextChanged,
    fieldChanged,
    handleFieldChanged,
    formSubmitted,
  };
};
