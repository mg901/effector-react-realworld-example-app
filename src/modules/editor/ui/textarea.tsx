import React from 'react';
import { useFormField } from '../../../lib';
import { TextField } from '../../../ui';
import { handleFieldChanged } from '../events';
import { $form } from '../model';

type Input = {
  name: string;
  placeholder?: string;
};

export const Textarea: React.FC<Input> = ({ name, placeholder }) => {
  const value = useFormField({ store: $form, name });

  return (
    <TextField
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleFieldChanged}
    />
  );
};
