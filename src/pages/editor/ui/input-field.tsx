import React from 'react';
import { useFormField } from '@library';
import { Input, InputProps } from '@ui';
import { $form } from '../model';

type Props = InputProps & { name: string };

export const InputField: React.FC<Props> = ({ name, ...props }) => {
  const value = useFormField({
    store: $form,
    name,
  });

  return <Input value={value} name={name} {...props} />;
};
