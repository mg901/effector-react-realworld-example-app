import React from 'react';
import { useFormField } from 'library/form';
import { Input, InputProps } from 'ui';
import { model } from '../model';

type Props = InputProps & { name: string };

export const InputField: React.FC<Props> = ({ name, ...props }) => {
  const value = useFormField({
    store: model.$form,
    name,
  });

  return <Input value={value} name={name} {...props} />;
};
