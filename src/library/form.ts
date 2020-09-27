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

// TODO move from this file
const getValue = (e: ChangeEvent): string => e.target.value;

const getField = (e: ChangeEvent): Field => ({
  [e.target.name]: e.target.value,
});

function createPrependedEvent<T, R>(
  transformer: (_: R) => T,
): [Event<T>, Event<R>] {
  const e = createEvent<T>();

  return [e, e.prepend(transformer)];
}

export type CreateFormEvents = () => Readonly<{
  formSubmitted: Event<React.FormEvent>;
}>;
// TODO move from this file

export const createFormEvents: CreateFormEvents = () => {
  const [textChanged, handleTextChanged] = createPrependedEvent(getValue);

  const [fieldChanged, handleFieldChanged] = createPrependedEvent(getField);

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
