import { createEvent, StoreValue, Store, Event } from 'effector';
import { useStoreMap } from 'effector-react';

export type ChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;

export type Field = Readonly<Record<string, string>>;

export type UseFormField = (x: {
  store: Store<any>;
  name: string;
}) =>
  | React.InputHTMLAttributes<HTMLInputElement>['value']
  | React.InputHTMLAttributes<HTMLTextAreaElement>['value'];

export const useFormField: UseFormField = ({ store, name }) =>
  useStoreMap({
    store,
    keys: [name],
    fn: (value, [key]) => value[key as keyof StoreValue<typeof store>] ?? '',
  });

export type CreateFormEvents = () => Readonly<{
  formSubmitted: Event<React.FormEvent>;
}>;

export const createFormEvents: CreateFormEvents = () => {
  const textChanged = createEvent<string>();
  const handleTextChanged = textChanged.prepend(
    (e: ChangeEvent) => e.target.value,
  );

  const fieldChanged = createEvent<Field>();
  const handleFieldChanged = fieldChanged.prepend((e: ChangeEvent) => ({
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
