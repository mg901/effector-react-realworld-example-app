import React from 'react';
import { useFormField } from '../hooks';
import { InputField } from '../components/input-field';
import { TextField } from '../components/text-field';
import { onChangeText } from '../auth/model.events';
import { authUser as user } from '../auth/model.store';

export const Input = ({ name, placeholder }) => {
  const value = useFormField({ store: user, name });

  return (
    <InputField
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChangeText}
    />
  );
};

export const Textarea = ({ name, placeholder }) => {
  const value = useFormField({ store: user, name });

  return (
    <TextField
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChangeText}
    />
  );
};
