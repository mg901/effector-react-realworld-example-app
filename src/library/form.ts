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
  textChanged: Event<string>;
  handleTextChanged: Event<ChangeEvent>;
  fieldChanged: Event<Field>;
  handleFieldChanged: Event<ChangeEvent>;
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

  return {
    textChanged,
    handleTextChanged,
    fieldChanged,
    handleFieldChanged,
  };
};
