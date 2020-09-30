import { Store, Event } from 'effector';

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

export type CreateFormEvents = () => Readonly<{
  textChanged: Event<string>;
  handleTextChanged: Event<ChangeEvent>;
  fieldChanged: Event<Field>;
  handleFieldChanged: Event<ChangeEvent>;
  formSubmitted: Event<React.FormEvent>;
}>;
