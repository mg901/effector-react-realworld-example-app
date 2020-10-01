import React from 'react';
import { Store } from 'effector';
import { useFormField } from 'library/form';
import { FormGroup } from './form-group';
import { Input, InputProps } from './input';

type Props = InputProps & Readonly<{ name: string; store: Store<any> }>;

export const InputField: React.FC<Props> = ({ store, name, ...props }) => {
  const value = useFormField({
    store,
    name,
  });

  return (
    <FormGroup>
      <Input name={name} value={value} {...props} />
    </FormGroup>
  );
};
