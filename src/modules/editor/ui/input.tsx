import React from 'react';
import { Event } from 'effector';
import { useFormField } from '../../../lib';
import { InputField } from '../../../ui';
import { handleFieldChanged } from '../events';
import { $form } from '../model';

type Input = {
  name: string;
  placeholder?: string;
  onKeyDown?: Event<React.KeyboardEvent<HTMLInputElement>>;
};

export const Input: React.FC<Input> = ({ name, placeholder, onKeyDown }) => {
  const value = useFormField({ store: $form, name });

  return (
    <InputField
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={handleFieldChanged}
      onKeyDown={onKeyDown}
    />
  );
};
